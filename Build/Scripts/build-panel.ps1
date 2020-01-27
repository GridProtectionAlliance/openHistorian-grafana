# Call the script with the path to the project as an argument:
#     .\build-panel.ps1 "C:\Projects\GPA-PhasorMap"


param(
    [string]$projectDir,
    [switch]$skipBuild = $false,
    [switch]$skipDocsBuild = $false,
    [string]$buildConfig = "Release",
    [string]$deployDir = ""
)

# Uncomment the following line to hardcode the project directory for testing
#$projectDir = "D:\Projects\GrafanaPanels\GPA-PhasorMap"

# Uncomment the following line to use WSL instead of Git for Windows
#function git { & wsl git $args }

# Validate script parameters
if ([string]::IsNullOrWhiteSpace($projectDir)) {
    throw "projectDir parameter was not provided, script terminated."
}

# Script Constants
Set-Variable githubOrgSite     -Option Constant -Scope Script -Value "https://github.com/gridprotectionalliance"
Set-Variable repo       	   -Option Constant -Scope Script -Value "openHistorian-grafana"
Set-Variable pluginFile        -Option Constant -Scope Script -Value "Source/plugin.json"
Set-Variable buildFolder       -Option Constant -Scope Script -Value "Source/"

# Script Functions
function Tag-Repository($tagName) {
    & git tag $tagName
    & git push --tags
}

function Reset-Repository {
    & git gc
    & git fetch
    & git reset --hard HEAD
    & git checkout master
    & git reset --hard origin/master
    & git clean -f -d -x
}

function Commit-Repository($file, $message) {
    & git add $file
    & git commit -m "$message"
}

function Push-Repository {
    & git push
}

function Test-RepositoryChanged {
    $latestTag = & git describe --abbrev=0 --tags
	
    if ($latestTag -eq $null) {
        return $true
    }
	
    $commitsSinceTag = & git log --pretty=oneline "$latestTag.."
    return $commitsSinceTag.Count -ne 0	
}

function Read-Version($target, [ref] $result) {
	$filecontent = Get-Content "$target" -raw | ConvertFrom-Json
    $result.Value = $filecontent.info.version
    $result.Value = $result.Value.Trim()    
    return $?
}

function Increment-Version($version) {
    $lastDotIndex = $version.LastIndexOf(".") + 1
    $buildNumber = $version.Substring($lastDotIndex) -as [int]
    $buildNumber++
    return $version.Substring(0, $lastDotIndex) + $buildNumber
}

function Update-Version($target, $newVersion) {
    $filecontent = Get-Content "$target" -raw | ConvertFrom-Json
	$filecontent.info.version = "$newVersion"
	$date = $(get-date).ToString("yyyy-MM-dd")
	$filecontent.info.updated = "$date"
	$filecontent |ConvertTo-Json -depth 32 |set-content "$target"
    return $?
}

function Install-NPM {
	"Installing NPM"
	npm install
	"Installed NPM Succesfully"
}

function Build-TS {
	"Building TypeScript"
	$mode = $buildConfig
	if ($mode = "release") {
		$mode = "production"
	}
	"Build set to mode $mode"
	.\node_modules\.bin\webpack  --mode=$mode
	
	"Built TypeScript"
}

function Run-Yarn {
	"Run YARN"
	.\node_modules\.bin\yarn
}

function Deploy($target, $name, $source, $deployZip, $deployBinaries) {
	new-item -Path "$target" -Name "$name" -ItemType directory
	"Copy $source to $target\$name"
	ROBOCOPY "$source\" "$target\$name" /E /is
	
	"Compressing Binaries to $target"
	Compress-Archive -Path "$target\$name" -DestinationPath "$projectDir\$name.zip" -Force
	Remove-Item –path "$target\$name" –recurse
	
	"Removing old deployed zip"
	if (Test-Path "$deployZip\$name.zip") {
		Remove-Item –path "$deployZip\$name.zip" –recurse
	}
	"Removing old deployed Binaries"
	if (Test-Path "$deployBinaries") {
		Remove-Item –path "$deployBinaries" –recurse
	}
	
	"Deploy .Zip $deployZip"
	ROBOCOPY "$projectDir"  "$deployZip" "$name.zip" /is /MOV
	
	"Deploy Binaries to $deployBinaries" 
	ROBOCOPY "$source\" "$deployBinaries" /E /is
}
# --------- Start Script ---------

# Get latest repository
Set-Location $projectDir

#Comment while working on the build script
Reset-Repository

$changed = Test-RepositoryChanged

if ($changed) {
    $changed = $false

    #Version The Repository
	$version = "0.0.0"
   
	if (-not (Read-Version "$projectDir\$pluginFile" ([ref]$version))) {
		"ERROR: Failed to read version."
		return
	}
	
	"Current version = $version"

	# Increment version build number
	$version = Increment-Version $version

	"Updating version to $version"
	
	if (-not (Update-Version -target "$projectDir\$pluginFile" -newVersion $version)) {
                "ERROR: Failed to update version."
                return
            }
		
	# Set Location to build folder and Install NPM
	Set-Location "$projectDir\$buildFolder"
	Install-NPM
	Build-TS
	Set-Location $projectDir
	Deploy -target "$projectDir" -source "$projectDir\Build\Output\$buildConfig\dist"  -name "$repo" -DeployZip "\\gpaweb\NightlyBuilds\GrafanaPanels" -DeployBinaries "\\gpaweb\NightlyBuilds\GrafanaPanels\Binaries\$repo"

	#Commit
	"Committing to remote repository"
	Commit-Repository "." "Updated $repo version to $version"
	
	Push-Repository
	
	# Tag repo to mark new changes
	$tag = $(get-date).ToString("yyyyMMddHHmmss")
	"Tag Repository to $tag"
	
    Tag-Repository $tag
	
	}
	
Set-Location $projectDir		
	

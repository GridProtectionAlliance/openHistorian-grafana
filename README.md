## openHistorian Grafana Data Source

Use the new grafana-cli tool to install openHistorian data source from the command line:

```
grafana-cli plugins install grafana-openhistorian
```

The plugin will be installed into your grafana plugins directory.

More instructions on the cli tool can be found here: [http://docs.grafana.org/v3.0/plugins/installation/](http://docs.grafana.org/v3.0/plugins/installation/)

You need the lastest grafana build for Grafana 3.0 to enable plugin support. You can get it here: [http://grafana.org/download/builds.html](http://grafana.org/download/builds.html)

## Alternate Installation Method

It is also possible to clone this repo directly into your plugins directory.

Restart grafana-server after clone and the plugin should be automatically detected and used.

```
git clone https://github.com/GridProtectionAlliance/openHistorian-grafana.git
sudo service grafana-server restart
```

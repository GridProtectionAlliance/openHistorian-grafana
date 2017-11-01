### Tag Selection

When adding metric queries from Grafana for the openHistorian, you can enter point information in a variery of forms including direct lists, e.g., measurement IDs "PPA:4; PPA:2", Guids "538A47B0-F10B-4143-9A0A-0DBC4FFEF1E8; E4BBFE6A-35BD-4E5B-92C9-11FF913E7877", or point tag names "GPA_TESTDEVICE:FREQ; GPA_TESTDEVICE:FLAG". Filter expressions are also supported, e.g.:
```
FILTER TOP 5 ActiveMeasurements WHERE SignalType LIKE '%PHA' AND Device LIKE 'SHELBY%' ORDER BY DeviceID
```
This expression would trend 5 phase angles, voltages or currents, for any device with a name that starts with "SHELBY".

See [syntax documentation](https://github.com/GridProtectionAlliance/openPDC/blob/master/Source/Documentation/wiki/Connection_Strings.md#input_and_output_syntax) for time-series framework input measurement keys more information.

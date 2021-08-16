# WOL Http
> :warning: **If you are using this project publicly(I don't recommend), it can be dangerous.** Before supporting ACL features.

Use Wake-On-Lan(WOL) via browser. 

## Usage

### How to run
This project use two environment variable
1. PORT : web server listen port(default: 3000)
2. DEV_PATH : path of device list file(default: ./devices.json)

### Device list format 
```
{
  "device_name": "MAC Address"
}
```

## Todo

- [ ] Web UI
  - [ ] Managing Device (Add/Delete)
- [ ] ACL

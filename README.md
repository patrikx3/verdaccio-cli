[//]: #@corifeus-header

[![NPM](https://nodei.co/npm/p3x-verdaccio-cli.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/p3x-verdaccio-cli/)

  

[![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://paypal.me/patrikx3) [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Corifeus @ Facebook](https://img.shields.io/badge/Facebook-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)  [![Build Status](https://api.travis-ci.com/patrikx3/verdaccio-cli.svg?branch=master)](https://travis-ci.com/patrikx3/verdaccio-cli)
[![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m780749701-41bcade28c1ea8154eda7cca.svg)](https://uptimerobot.patrikx3.com/)





# 🍶 Verdaccio CLI v2020.10.111



**Bugs are evident™ - MATRIX️**
    

### NodeJs LTS Version Requirement
```txt
>=12.13.0
```

### Built on NodeJs
```txt
v12.18.4
```

The ```async``` and ```await``` keywords are required. Only the latest LTS variant is supported.

Install NodeJs:
https://nodejs.org/en/download/package-manager/



# Description

                        
[//]: #@corifeus-header:end


It is that first `p3x-verdaccio-cli` version that is working with the [Verdaccio](https://github.com/verdaccio).
  
Based on https://github.com/verdaccio/verdaccio/issues/343
  
Of course, with an option eg. `--storage=azure` it could be enabled.

⚠️ **MAKE SURE TO STOP VERDACCIO BEFORE YOU CONTINUE AND MAKE SURE TO BACKUP BEFORE YOU CHANGE ANYTHING, SO THAT YOU COULD REVERT IF SOMETHING IS NOT STATISFYING!!!** 

⚠️ **This is only working with the original Sinopia file system storage driver!!!** 

**For own packages only works without namespaces!**

# Show the help

```bash
p3x-verdaccio-cli
```

# Routines

## Cache

### Info

```text
p3x-verdaccio-cli --config /var/npm/config.yaml cache info 
```

#### Output
```text
root@server:~# p3x-verdaccio-cli --config /var/npm/config.yaml cache info
Please add a flag --confirm and only add this flag after you stopped Verdaccio!

Own packages: corifeus-utils, corifeus-builder, corifeus-builder-angular, corifeus-web, corifeus-web-material, p3x-aes-folder, p3x-angular-compile, p3x-html-pdf, p3x-onenote, p3x-ramdisk, p3x-systemd-manager, p3x-tools, p3x-freenom, grunt-p3x-express, corifeus-server, p3x-redis-ui-server, p3x-redis-ui-material, p3x-redis-ui, p3x-verdaccio-cli, p3x-xml2json
Own packages count: 20

Total of package count without own packages: 1668


Please add a flag --confirm and only add this flag after you stopped Verdaccio!
```

### Clean

```bash
# first you can try a dry run and give some output info
p3x-verdaccio-cli --config /var/npm/config.yaml --dry cache clean 

# actually clean the cache
p3x-verdaccio-cli --config /var/npm/config.yaml cache clean 
```

## Package remove

```bash
# first you can try a dry run and give some output info
p3x-verdaccio-cli --config /var/npm/config.yaml --dry pkg-rm my-own-pkg 

# actually it removes a package
p3x-verdaccio-cli --config /var/npm/config.yaml pkg-rm my-own-pkg 
```

## Package

### Keep

This function removes old versions from Verdaccio and keep the set minimum versions (eg. keep minimum 3 versions and delete the rest).  

```bash
# first you can try a dry run and give some output info
p3x-verdaccio-cli --config /var/npm/config.yaml --dry pkg keep 

# actually keeps 3 last versions of your all own packages
p3x-verdaccio-cli --config /var/npm/config.yaml pkg keep 

# if you want more versions, use the --min flag, and keep 10 versions for each packages
p3x-verdaccio-cli --config /var/npm/config.yaml pkg keep --min 10
```


⚠️ **MAKE SURE TO START VERDACCIO AFTER YOU HAVE DONE!!!** 


[//]: #@corifeus-footer

---

🙏 This is an open-source project. Star this repository, if you like it, or even donate to maintain the servers and the development. Thank you so much!

Possible, this server, rarely, is down, please, hang on for 15-30 minutes and the server will be back up.

All my domains ([patrikx3.com](https://patrikx3.com) and [corifeus.com](https://corifeus.com)) could have minor errors, since I am developing in my free time. However, it is usually stable.

**Note about versioning:** Versions are cut in Major.Minor.Patch schema. Major is always the current year. Minor is either 4 (January - June) or 10 (July - December). Patch is incremental by every build. If there is a breaking change, it should be noted in the readme.


---

[**P3X-VERDACCIO-CLI**](https://corifeus.com/verdaccio-cli) Build v2020.10.111

[![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)


## P3X Sponsor

[IntelliJ - The most intelligent Java IDE](https://www.jetbrains.com/?from=patrikx3)

[![JetBrains](https://cdn.corifeus.com/assets/svg/jetbrains-logo.svg)](https://www.jetbrains.com/?from=patrikx3)




[//]: #@corifeus-footer:end

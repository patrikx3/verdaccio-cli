[//]: #@corifeus-header
  
[![NPM](https://nodei.co/npm/p3x-verdaccio-cli.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/p3x-verdaccio-cli/)

  

[![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://paypal.me/patrikx3) [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Corifeus @ Facebook](https://img.shields.io/badge/Facebook-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)  [![Build Status](https://api.travis-ci.com/patrikx3/verdaccio-cli.svg?branch=master)](https://travis-ci.com/patrikx3/verdaccio-cli) 
[![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m780749701-41bcade28c1ea8154eda7cca.svg)](https://uptimerobot.patrikx3.com/)

 


 
# 🍶 Verdaccio CLI v2019.3.10-2  

  
🙏 This is an open-source project. Star this repository, if you like it, or even donate to maintain the servers and the development. Thank you so much!

Possible, this mini server, rarely, is down, please hang on for 15-30 minutes and the server will be back up.

All my domains ([patrikx3.com](https://patrikx3.com) and [corifeus.com](https://corifeus.com)) could have minor errors, since I am developing in my free time. However, it is usually stable.

**Bugs are evident™ - MATRIX️**  
    

### Node Version Requirement 
``` 
>=10.13.0 
```  
   
### Built on Node 
``` 
v11.11.0
```   
   
The ```async``` and ```await``` keywords are required.

Install NodeJs:    
https://nodejs.org/en/download/package-manager/    



# Description  

                        
[//]: #@corifeus-header:end


It is that first `p3x-verdaccio-cli` version that is working with the [Verdaccio](https://github.com/verdaccio).
  
Based on https://github.com/verdaccio/verdaccio/issues/343
  
What is good about this, that when I checked my cache count is 1981, after clean my cache and reinstall my all repos is down to 881.

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
p3x-verdaccio-cli --config /var/npm/config.yml cache info 
```

#### Output
```text
root@server:/var/npm# npm i -g p3x-verdaccio-cli
/usr/bin/p3x-verdaccio-cli -> /usr/lib/node_modules/p3x-verdaccio-cli/bin/p3x-verdaccio-cli.js
+ p3x-verdaccio-cli@2019.1.23-16
updated 1 package in 0.953s
root@server:/var/npm# p3x-verdaccio-cli --config=/var/npm/config.yaml cache info
(node:23539) ExperimentalWarning: The fs.promises API is experimental

Own packages: corifeus-utils, corifeus-builder, corifeus-builder-angular, corifeus-web, corifeus-web-material, p3x-aes-folder, p3x-angular-compile, p3x-docker-registry-client, p3x-html-pdf, p3x-onenote, p3x-ramdisk, p3x-systemd-manager, p3x-tools, p3x-freenom, grunt-p3x-express, corifeus-server, p3x-redis-ui-server, p3x-redis-ui-material, p3x-redis-ui, grunt-injector, p3x-verdaccio-cli
Own packages count: 21

Total of package count without own packages: 771
```

### Clean

```bash
# first you can try a dry run and give some output info
p3x-verdaccio-cli --config /var/npm/config.yml --dry cache clean 

# actually clean the cache
p3x-verdaccio-cli --config /var/npm/config.yml cache clean 
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


[//]: #@corifeus-footer

---

[**P3X-VERDACCIO-CLI**](https://pages.corifeus.com/verdaccio-cli) Build v2019.3.10-2 

[![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software) 


## P3X Sponsors

[IntelliJ - The most intelligent Java IDE](https://www.jetbrains.com/?from=patrikx3)
  
[![JetBrains](https://cdn.corifeus.com/assets/svg/jetbrains-logo.svg)](https://www.jetbrains.com/?from=patrikx3) [![NoSQLBooster](https://cdn.corifeus.com/assets/png/nosqlbooster-70x70.png)](https://www.nosqlbooster.com/)

[The Smartest IDE for MongoDB](https://www.nosqlbooster.com)
  
  
 

[//]: #@corifeus-footer:end

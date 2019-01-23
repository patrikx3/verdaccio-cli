[//]: #@corifeus-header
  
[![NPM](https://nodei.co/npm/p3x-verdaccio-cli.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/p3x-verdaccio-cli/)

  

[![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software) [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Build Status](https://api.travis-ci.com/patrikx3/verdaccio-cli.svg?branch=master)](https://travis-ci.com/patrikx3/verdaccio-cli) 
[![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m780749701-41bcade28c1ea8154eda7cca.svg)](https://uptimerobot.patrikx3.com/)

 


 
# 🍶 Verdaccio CLI v2019.1.23-19  

  
🙏 This is an open-source project. Star this repository, if you like it, or even donate to maintain the servers and the development. Thank you so much!

I run my own server with dynamic IP address, so, it may happen, that the server can not be reachable for about max 15 minutes, due to nature of the dynamic DNS. The server may also be unreachable, when I backup the SSD with Clonzilla (very rarely) or an electrical issue (but this should not happen again). When the server is down, please hang on for 15-30 minutes and the server will be back up.

All my domains ([patrikx3.com](https://patrikx3.com) and [corifeus.com](https://corifeus.com)) could have errors, since I am developing in my free time. However, it is usually stable.

**Bugs are evident™ - MATRIX️**  
    

### Node Version Requirement 
``` 
>=10.13.0 
```  
   
### Built on Node 
``` 
v11.7.0
```   
   
The ```async``` and ```await``` keywords are required.

Install NodeJs:    
https://nodejs.org/en/download/package-manager/    



# Description  

                        
[//]: #@corifeus-header:end


It is that first `p3x-verdaccio-cli` version that is working with the [Verdaccio](https://github.com/verdaccio).

What is good about this, that when I checked my cache count is 1981, after clean my cache and reinstall my all repos is down to 881.

## Features

⚠️ **This is only working with the original Sinopia file system storage driver!!!** 
 
### Show the help

```bash
p3x-verdaccio-cli
```

### Info

```text
p3x-verdaccio-cli --config /var/npm/config.yml cache info 
```

###### Output
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

### Clean cache

Of course, with an option eg. `--storage=azure` it could be enabled.

```bash
# first you can try a dry run and give some output info
p3x-verdaccio-cli --config /var/npm/config.yml --dry cache clean 

# actually clean the cache
p3x-verdaccio-cli --config /var/npm/config.yml cache clean 
```


[//]: #@corifeus-footer

---

[**P3X-VERDACCIO-CLI**](https://pages.corifeus.com/verdaccio-cli) Build v2019.1.23-19 

[![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software) [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) 


## P3X Sponsors

[IntelliJ - The most intelligent Java IDE](https://www.jetbrains.com/?from=patrikx3)
  
[![JetBrains](https://cdn.corifeus.com/assets/svg/jetbrains-logo.svg)](https://www.jetbrains.com/?from=patrikx3) [![NoSQLBooster](https://cdn.corifeus.com/assets/png/nosqlbooster-70x70.png)](https://www.nosqlbooster.com/)

[The Smartest IDE for MongoDB](https://www.nosqlbooster.com)
  
  
 

[//]: #@corifeus-footer:end
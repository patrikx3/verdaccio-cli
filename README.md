[//]: #@corifeus-header

  [![NPM](https://img.shields.io/npm/v/p3x-verdaccio-cli.svg)](https://www.npmjs.com/package/p3x-verdaccio-cli)  [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://paypal.me/patrikx3) [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Corifeus @ Facebook](https://img.shields.io/badge/Facebook-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)  [![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m780749701-41bcade28c1ea8154eda7cca.svg)](https://stats.uptimerobot.com/9ggnzcWrw)





# 🍶 Verdaccio CLI v2024.10.102



**Bugs are evident™ - MATRIX️**
    



### NodeJS LTS is supported

### Built on NodeJs version

```txt
v22.3.0
```





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


## Support Our Open-Source Project ❤️
If you appreciate our work, consider starring this repository or making a donation to support server maintenance and ongoing development. Your support means the world to us—thank you!

### Server Availability
Our server may occasionally be down, but please be patient. Typically, it will be back online within 15-30 minutes. We appreciate your understanding.

### About My Domains
All my domains, including [patrikx3.com](https://patrikx3.com) and [corifeus.com](https://corifeus.com), are developed in my spare time. While you may encounter minor errors, the sites are generally stable and fully functional.

### Versioning Policy
**Version Structure:** We follow a Major.Minor.Patch versioning scheme:
- **Major:** Corresponds to the current year.
- **Minor:** Set as 4 for releases from January to June, and 10 for July to December.
- **Patch:** Incremental, updated with each build.

**Important Changes:** Any breaking changes are prominently noted in the readme to keep you informed.

---


[**P3X-VERDACCIO-CLI**](https://corifeus.com/verdaccio-cli) Build v2024.10.102

 [![NPM](https://img.shields.io/npm/v/p3x-verdaccio-cli.svg)](https://www.npmjs.com/package/p3x-verdaccio-cli)  [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)






[//]: #@corifeus-footer:end

138.197.137.132

//login through Plesk or digital ocean
micromedia

sudo apt update
sudo apt upgrade

## Plesk ##
 -installed key
 -updated Plesk Obsidian 18.0.56


sudo fail2ban-client set JAIL banip 45.88.90.207
sudo fail2ban-client set ssh banip 45.88.90.207
sudo fail2ban-client set plesk-postfix banip 45.88.90.207

	plesk-postfix



  412micromedia bash

#find .vscode folders
find vhosts/ -name ".vscode" -print
find vhosts/ -name "*.py" -print
find vhosts/ -name "*.mov" -print
find vhosts/ -name "moneroocean" -print

find httpdocs/ -name "*.mov" -print
find httpdocs/ -name "*.psd" -print

#remove .vscode folders
find vhosts/ -name ".vscode" -exec rm -rf {} \;
find vhosts/ -name "*.mov" -exec rm -rf {} \;


# get folder sizes
du -sh /var/www/vhosts/*/.trash | sort -h
du -sh * | sort -h

du -sh /var/www/vhosts/* | sort -h
du -sh httpdocs/* | sort -h
du -sh emmacolata00.582mi.com/ * | sort -h

## not working $ du -ah httpdocs/ | grep -v "/$" | sort -rh | head -50 

find httpdocs/ -type f -printf "%s\t%p\n" | sort -hr | head -n25

find vhosts/ -type f -printf  '[%TY-%Tm-%Td]\t' | sort -hr | head -n25 | -exec du -bh {} \;
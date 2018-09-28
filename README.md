# IP CHANGED DAEMON
Check the number of IPs that bind to an interface is chaged or not and execute a command if there is a change. To check periodically ,you may want to use `crontab`.
For example, 
```
$ crontab -e 
```
and add 
```
*/5 * * * * * cd <path to this folder> && ./check.sh
```

# Requirements
1. `Node` has permission to write in this folder.

# Usage
To change watching network interface, edit `eth0` to the desired network interface name.
```
node ./index.js eth0
```
in `check.sh` to any interface name you want.

To execute the command after number of IP changed, there is a guide in `check.sh`, please check out.

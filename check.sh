#!/bin/sh
# change first argument to change the interface you want to check
node ./index.js eth0
RETRUN=$?
if [ $RETRUN -eq 1 ]
then
    echo "Number of IPs changed"
    # Insert the command you want to execute here
    # example
    pm2 reload all
elif [ $RETRUN -eq -1 ]
then
    echo "There was an error. Check logs to get detail"
elif [ $RETRUN -eq 0 ]
then
    echo "Number of IPs does not changed or this is the first time checking"
fi
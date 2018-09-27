#!/bin/sh
# change first argument to change the interface you want to check
node ./index.js en0
if [ $? -eq 1 ] 
then
    echo "Number of IPs changed"
    # Insert the command you want to execute here
    # example
    pm2 reload all
elif [ $? -eq -1 ]
then
    echo "There was an error. Check logs to get detail"
elif [$? -eq 0 ]
then
    echo "Number of IPs does not changed or this is the first time checking"
fi
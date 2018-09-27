const os = require('os');
const fs = require('fs');

const IP_COUNT_FILENAME = 'IP_C_';
const INTERFACE_NAME = process.argv[2];

const ipv4Count = os.networkInterfaces()[INTERFACE_NAME].filter(aIP=>aIP.family === 'IPv4').length;

fs.readFile(IP_COUNT_FILENAME, 'utf8', (err,data)=>{
    if(err.code === 'ENOENT'){
        writeNumberOfIP(Number.parseInt(ipv4Count), err=>{
            err?process.exit(-1):process.exit(0);
        });
    }else{
        const originalNumber = Number.parseInt(data);
        writeNumberOfIP(ipv4Count, err=>{
            if(err){
                process.exit(-1);
            }else{
                (originalNumber !== ipv4Count)?process.exit(1):process.exit(0);
            }
        });
    }
});

function writeNumberOfIP(numberOfIP, callback){
    fs.writeFile(IP_COUNT_FILENAME, numberOfIP, {encoding: 'utf8'}, err=>{
        callback(err);
    });
}

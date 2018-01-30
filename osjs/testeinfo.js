const os = require('os');
const hostname = os.hostname();
const cpu = os.cpus();
var address, macnum;
const networks = os.networkInterfaces();
const mem = os.totalmem()

// Itera sobre as redes
for (var i in networks) {
// Encontra a que está com ipv4
var network = networks[i].filter(function(details) {
    return details.family === 'IPv4' && details.internal === false;
});
if(network.length > 0)
    address = network[0].address,
    macnum = network[0].mac;
}

console.log("Hostname: ",hostname);
console.log("CPU:      ",cpu[0].model);
console.log("IP:       ",address);
console.log("Mac:      ",macnum);
console.log("Memory:   ",Math.round(mem / 1000000000), "GBs");
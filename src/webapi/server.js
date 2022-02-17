const cluster = require('cluster');
const os = require('os');
const {app} = require("./app");

function startServer(port) {
    app.listen(port, () => {
        console.log('Listen at http://localhost:' + port);
    })
}

function startServerMultiProcess(port) {
    if(cluster.isPrimary){
        // get the number of available cpu cores
        const nCPUs = os.cpus().length;
        // fork worker processes for each available CPU core
        for(let i = 0; i< nCPUs; i++){
            cluster.fork()
        }
    }else{
        startServer(port);
    }
}

module.exports = {
    startServer,
    startServerMultiProcess
}
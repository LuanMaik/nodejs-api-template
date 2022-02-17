const {
    startServer,
    //startServerMultiProcess
} = require("./webapi/server");

const PORT = process.env.PORT || 3003;

startServer(PORT);
//startServerMultiProcess(PORT);
import cluster from "cluster";
import os from "os";
import express from "express";


const totalCpus = os.cpus().length;
// console.log(totalCpus);

if (cluster.isPrimary) {
    for (let i = 0; i < totalCpus; i++) {
        cluster.fork();
    }
} else {
    const app = express();
    const PORT = 8001;

    app.get("/", (req, res) => {
        return res.json({ message: `hello from server ${process.pid}` })
    })

    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    })
}
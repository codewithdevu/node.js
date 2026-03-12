import express from "express";


const app = express();
const PORT = 8001;

app.get("/" , (req , res) => {
    return res.json({message: `hello from server ${process.pid}`})
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    
})
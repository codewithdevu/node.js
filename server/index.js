const express = require("express")


const app = express();

app.get("/" , (req , res) => {
    return res.send("Hello from home page")

})

app.get("/about" ,  (req , res) => {
    return res.send(`hello form about page hey ${req.query.name}`)
} )

app.listen(5000 , () => {
    console.log("server started");
    
})
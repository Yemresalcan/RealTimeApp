const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");

app.use(cors());

app.get("/",(req,res)=>{
    res.send("hello Welcome!");
})

let lastColor = "#282c34";

io.on("connection",(socket)=> {
    console.log("Bir Kullanici giris yapti ✋");

    socket.emit("receive",lastColor);
    socket.on("newColor",(color)=>{
        console.log(color);
        lastColor = color;
        io.emit("receive",color);
    });
socket.on("disconnect",(socket)=> {
    console.log("Bir Kullanici Cikis yapti 👋")
});

});
http.listen(3001,()=>console.log("Server is To Moon 🚀 🚀 "))
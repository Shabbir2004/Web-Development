import http from "http";

const port = 3000;

const server = http.createServer((req, res) => {
  res.end("Hello world");
});

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
})





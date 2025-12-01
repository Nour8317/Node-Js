import http from 'http';

const server = http.createServer((req, res)=>{
    res.write('Hello World');
    res.end();
});
const PORT = process.env.PORT;
server.listen(PORT, ()=>{
    console.log(`Server Running on ${PORT}`)
});
// let http=require('http')
// import http from 'http'
// const server=http.createServer((req,res)=>{
//     res.end("the end of node js is very good for me")
// });
// server.listen(8000,"127.0.0.1",()=>{
//     console.log("listening power is god")
// })




import http from 'http'
const server=http.createServer((req,res)=>{
    res.end("hello")
})
server.listen(8000,'127.0.0.1',()=>{
    console.log("hi r@ani")
})



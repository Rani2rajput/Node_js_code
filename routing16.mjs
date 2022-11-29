import http from 'http'
const add=http.createServer((req,res)=>{
    // console.log(req.url)
    if (req.url=="/"){
    res.end("rani is good for node_js")
    }else if (req.url=="/about"){
    res.end("raniranirani@")
    }else if (req.url=="/contact"){
    res.end("contactus@please")
    }
});
add.listen(8000,"127.0.0.1",()=>{
    console.log("node_js@12")
})





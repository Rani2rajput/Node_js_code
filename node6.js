const fs=require("fs")
fs.mkdir("diksha.js)",(err)=>{
    console.log("folder created")
})

fs.writeFile("diksha.txt","my name is developer",(err)=>{
    console.log("create file")
})

fs.appendFile("diksha.txt","i am making software",(err)=>{
    console.log("append data")
})

fs.readFile("diksha.txt","utf8",(err,data)=>{
    console.log(data)
})


fs.rename("diksha.txt","rajput.txt",(err)=>{
    console.log("err")
})

fs.unlink("rajput.txt",(err)=>{
    console.log("err")
})
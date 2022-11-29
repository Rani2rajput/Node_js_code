const fs=require("fs")
// fs.writeFile("read.txt","i am going to himachal )",(err)=>{
//     console.log("my father is a farmer")
//     console.log(err)
// });


// fs.appendFile("read.txt","after that ia am going to kanada)",(err)=>{
//     console.log("file create")
// })


fs.readFile("read.txt","Utf8",(err,data)=>{
    console.log(data)
})




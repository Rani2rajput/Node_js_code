const fs=require("fs");
fs.writeFileSync("read.txt","hello rani")
// fs.writeFileSync("read.txt","hiii ranu")
fs.renameSync("read.txt","anu.txt")
const by=fs.readFileSync("anu.txt")
console.log(by)
// const m=by.toString()
// console.log(m)
fs.appendFileSync("anu.txt","i am from america")

const data=fs.readFileSync("anu.txt","utf8")
console.log(data)

// fs.unlinkSync("anu.txt")          (delet data)







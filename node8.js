const path =require("path")
console.log(path.dirname("C: /Users/rani2/Desktop/node_js/node8.js"))
console.log(path.extname("C: /Users/rani2/Desktop/node_js/node8.js"))
console.log(path.basename("C: /Users/rani2/Desktop/node_js/node8.js"))

console.log(path.parse("C: /Users/rani2/Desktop/node_js/node8.js"))



const mypath=path.parse("C: /Users/rani2/Desktop/node_js/node8.js")
console.log(mypath.name)
console.log(mypath.root)
console.log(mypath.extname)







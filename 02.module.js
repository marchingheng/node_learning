// self-defined module
var md = require("./01.module")
// core module
var fs = require("fs")
console.log(md)
// console.log(fs)

a = 100
console.log("I am a global variable", global.a)

console.log(arguments.callee + "")
// when you run `node file_name.js`, node will wrap the file like below, then pass in the parameter and execute it
// function (exports, require, module, __filename, __dirname) {
//     // self-defined module
//     var md = require("./01.module")
//     // core module
//     var fs = require("fs")
//     console.log(md)
//     // console.log(fs)
    
//     a = 100
//     console.log("I am a global variable", global.a)
    
//     console.log(arguments.callee + "")
//     }
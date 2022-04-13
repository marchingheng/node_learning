var fs = require("fs")
// you don't need to open first then write, just write directly
fs.writeFile("hello3.txt", "this written by writeFile", function(err){
    if(!err){
        console.log("write succeeded!")
    }
})
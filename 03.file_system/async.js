var fs = require("fs")
fs.open("hello2.txt", "w", function(err, fd) {
        if(!err){
            fs.write(fd, "this is written asynchronously", function(err){
                if(!err){
                    console.log("aync write succeeded!")
                }
                fs.close(fd, function(err){
                    if(!err){
                        console.log("file is closed!")
                    }
                })
            })
        }else{
            console.log(err);
        }
    }
)

console.log("this line of code will be run before the asynchronous code")
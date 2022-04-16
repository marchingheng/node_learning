// sync write, async write, simple write are not suitable for big file(memory is limited)
// we will need streaming write for big file
var fs = require("fs")
var ws = fs.createWriteStream("hello4.txt")
ws.write("this is written through stream! ")
ws.write("this is written through stream! ")
ws.write("this is written through stream! ")
ws.write("this is written through stream! ")
ws.write("this is written through stream! ")
// ws.end() is unpluging the pipe from origin end, so the contents can still flow to the destination
// if you use ws.close(), the pipe will be unplugged from the destination, then the contents in the stream won't have chance to flow to the destination
ws.end()

ws.once("open", function(){
    console.log("stream is open!")
})
ws.once("close", function(){
    console.log("stream is closed!")
})
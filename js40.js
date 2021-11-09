var http= require('http');
var mysum= require('./js41')
const hege = ["Cecilie", "Lone"];
const stale = ["Emil", "Tobias", "Linus"];
var numone = 10;
var numtwo = 20;


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("The sum of two numbers is"+mysum.mysum1(numone,numtwo));
    res.write("Passing arguments"+mysum.arr(hege,stale));
    res.write(" My name is : Vignesh");
    res.end();
}).listen(8080);

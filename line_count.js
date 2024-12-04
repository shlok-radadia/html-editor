setInterval(function(){
let text = document.getElementById("html").value;   
let lines = text.split(/\r|\r\n|\n/);
let count = lines.length;
let cool = []
let nice = []
for (var input = 1; input <= count; input++) {
    cool.push(input)
   }

let toadd = document.getElementById("line_number")

cool.forEach(function(thisishere){
    nice.push(`${thisishere}\n`)
})

let wonderful = nice.join("")

toadd.innerHTML = wonderful

let ohohohtml = document.getElementById("html")
ohohohtml.style.height = '';
ohohohtml.style.height = ohohohtml.scrollHeight +'px'

let ohohohtml123 = document.getElementById("line_number")
ohohohtml123.style.height = '';
ohohohtml123.style.height = ohohohtml123.scrollHeight +'px'

}, 10)
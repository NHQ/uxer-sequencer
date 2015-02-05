var seq = require('./index')
var div = document.createElement('div')
div.style.width = '1500px'
document.body.appendChild(div)
var arr = new Array(64)
for(var x = 1; x <= arr.length; x++){
  arr[x-1] = x % 4 ==  1 ? true : false
}

var emitter = seq(div, arr)
emitter.on('change', function(a,b,c){
  console.log(a,b,c)
})

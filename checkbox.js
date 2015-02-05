var ndarray = require('ndarray')
var squarejob = require('./squarejob')
var canvas = document.createElement('canvas')

canvas.width = 300
canvas.height = 300

document.body.appendChild(canvas)
var ctx = canvas.getContext('2d');

var opts = {}
opts.height = 8
opts.width = 3
opts.padding = 10
opts.offset = [0,0]
opts.size =  

var arr = new Array(h * w)
for(var x = 0; x < h * w; x++){
  arr[x] = x % 21 % 8 % 3 < 1 ? true : false
}

opts.array = arr

squarejob(ctx, opts, 300 / 8, [0,0])


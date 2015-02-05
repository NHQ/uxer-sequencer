var n = 0;
var o = [0,0];
var hues = [] 
var hue, sat;
var ndarray = require('ndarray')

module.exports = function(ctx, opts, size, offset){
  var nda = ndarray(opts.array, [opts.height, opts.width]) // inverted 
  for(var i = 0; i < nda.shape[0]; i++){
    for(var j = 0; j < nda.shape[1]; j++){
      n = nda.get(j, i)
      gen(ctx, size, i * size, j * size, n, offset)
    }
  }
}

function gen(draw, lifeSize, x, y, z, offset){
  x -= x % lifeSize
  y -= y % lifeSize
  
  offset = [lifeSize / 4, lifeSize / 4]
  draw.beginPath()

console.log(x,y,z)
//  sat = Math.floor(z % 255)// Math.floor(z % 8)
//  draw.fillStyle = hsla(90, 100,  (z/255) * .5 * 100, .2) 
  draw.fillStyle = z == false ? 'red':'limegreen' 
  draw.lineWidth = lifeSize / 16
  draw.strokeStyle = 'black'
  draw.rect(x + offset[0], y + offset[1], lifeSize * 3 / 4, lifeSize * 3 / 4)
  draw.fill()
  draw.stroke()
}

function hsla(h,s,l,a){
  return 'hsla('+h+','+s+'%,'+l+'%,'+a+')'
}
function rgba(r,g,b,a){
  return 'rgba('+Array.prototype.join.call(arguments, ',') +')'
}

var para = require('../parametrical/xindex')
var Emitter = require('events').EventEmitter

module.exports = function(el, seq){
  var emitter = new Emitter()
  var p = para(el)
  var params = {}
  seq.forEach(function(e,i){
    var x = {}
    x.type = 'button'
    x.value = e
    x.diameter = 35
    params[i] = x
  })
  params = p(params)
  for(var x in params){
    params[x].value((function(i){
      i = Number(i)
      return function(val){
        seq[i] = val
        emitter.emit('change', i, val, seq)  
    }})(x))
  }
  return emitter
}

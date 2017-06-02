var events = require('events');

element.on('click', function(){});

var myEmmitter = new events.EventEmitter();

myEmmitter.on('anEvent',function(msg){
    console.log(msg);
});

myEmmitter.emit('anEvent','The event is absolutely emmited');

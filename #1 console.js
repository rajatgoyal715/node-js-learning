console.log("Hello Rajat, You are learning Node.js!");

setTimeout(function(){
    console.log("Three seconds \n have passed!");

},3000);

var time = 0;
var timer = setInterval(function(){
    console.log(time+ ' seconds have passed');
    time += 2;
    if(time > 8){
        clearInterval(timer);
    }
},2000);

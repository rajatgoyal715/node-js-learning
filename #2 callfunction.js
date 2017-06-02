// General Method for writing a function!
function write(){
    console.log('Woah! I just Invoked a function');
}
write();

// Writing a funcion expression

var sayBye = function(){
    console.log('I just called a funcion expression,!');
}

sayBye();

// Another example
function callFunction(fun){
 fun();
}

// a function variable
var tata = function(){
    console.log('bye');
}

callFunction(tata);

/* ======= CLOSURES ========
any function created inside other functions 
will have access to parental functions memory
==========================*/

function greet(whatToSay) {
    // func. are objects that you can return as a value
    return function(name) { 
        console.log(whatToSay + ' ' + name);
    }
}

var sayHi = greet('Hi');
sayHi('Tony'); // result should be Hi Tony

/* ============================================
- when code starts, global execution context is established
- sayHi envoked greet function and is added to the execution stack
- whatToSay is sitting in var environment of greet()
- after return, greet execution context is popped off the stack
    + even after it finished, memory space is still there
- 'sayHi' execution context created
    + when it JS engine hits c.log it goes up scope chain to 
    look for the whatToSay variable. has reference to memory space
============================================== */

// Example #2
function buildFunctions() {
    var arr = [];
    for(var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }
        )
    }
    return arr;
}

var fs = buildFunctions();
// referencing functions in arr and calling them
fs[0](); // outputs 3
fs[1](); // outputs 3
fs[2](); // outputs 3


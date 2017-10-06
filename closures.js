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

/* =====================================
Why 3? Bc what's in memory hangs around
- when funcs. called - looks for var i in its own code
    + if cannot find, goes up to its outer reference
    + in memory, i is 3 at the end of the for loop
====================================== */

// Example #2.5
function buildFunctions2() {
    var arr = [];
    for(var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                // IIFE
                return function() {
                    console.log(j);
                }
            }(i))
        )
    }
    return arr;
}

var fs2 = buildFunctions2();
fs2[0](); // outputs 0
fs2[1](); // outputs 1
fs2[2](); // outputs 2
/* ======================
greeting does not exist in anon.
function and sayHiLater already
complete.
    + goes up scope chain w/ 
    a closure for the variable
    + greeting is still within 
    memory
======================= */

function sayHiLater() {
    var greeting = 'Hi';
    setTimeout(function(){
        console.log(greeting);
    }, 3000);
}

sayHiLater();

// Example #2: jQuery
/* ======================
jQuery uses function expressions
and first class functions.

$('button').click(function(){

});
======================= */

// Example #3: Callback
function tellMeWhenDone(callback) {
    var a = 1000;
    var b = 2000;
    callback(); // the 'callback', runs function given
}

tellMeWhenDone(function(){
    console.log('I am done!');
});

function makeGreeting(lang) {
    return function(firstName, lastName) {
        if(lang === 'en') {
            console.log('Hello' + firstName + ' ' + lastName + '!');
        }
        if(lang === 'es') {
            console.log('Hola' + firstName + ' ' + lastName + '!');
        }
    }
}

var greetEnglish = makeGreeting('en');
var greetEspañol = makeGreeting('es');
greetEnglish('Ryan', 'Apples');
greetEspañol('Real', 'Madrid');

/* =============================
functions are executed then popped off
execution context.
    + two spots in memory that hold 
    language values once contained
JS engine knows, greetEnglish() was 
made during first execution context
    + this is where closure occurs
greetEspañol() made during 2nd exec.
context. see lang as 'es', then gets
Spanish greeting
===============================*/

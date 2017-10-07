/* FUNCTIONAL PROGRAMMING ============
Takes in array and function
    + Pass each iteration into function called
    within the push method attached to newArr
================================ */
function mapForEach(arr, fn) {
    var newArr = [];
    for (var i=0; i < arr.length; i++) {
        // where func. programming comes in
        newArr.push(
            // call func. and pass in arr item
            fn(arr[i])
        )
    };
    return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);

// called function, passed in an array, and told
// it what to do with each item in the array
var arr2 = mapForEach(arr1, function(item){
    return item * 2;
});

console.log(arr2);

// map over array and return a boolean result
var arr3 = mapForEach(arr1, function(item){
    return item > 2;
});

console.log(arr3);


/* Example: Check Limit ===============
Return a boolean for item being greater than
limiter
    + created a function using a func. exp
    + accepted a limiter and item
*/
var checkPastLimit = function(limiter, item) {
    return item > limiter;
}
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4); // should return [false, true, true]

// Returns a function object, but need to have its
// first parameter preset
var checkPastLimitSimplified = function(limiter) {
    // creating an object
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
}

var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arr5); // returns [false, false, true];
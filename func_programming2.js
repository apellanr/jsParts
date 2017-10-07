var arr1 = [1,2,3];
console.log(arr1);

// Functionality examples from underscore
var arr6 = _.map(arr1, function(item) { return item * 3});
console.log(arr6);

// Filter list and returns a sublist with items that are divisible by 0
var arr7 = _.filter([2,3,4,5,6,7], function(item) { 
    return item % 2 === 0;
});
console.log(arr7);
// 1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function oneto255(){
    var numarray = []
    for(var i = 1; i <= 255; i++){
        numarray.push(i)
    }
    return numarray;
}
var display = oneto255();
console.log(display);

// 2. Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function sumevento1000(){
    var sum = 0
    for(var i = 1; i <= 1000; i++){
        if (i%2 == 0){
            sum += i;
        }
    }
    return sum;
}
var display = sumevento1000();
console.log(display);

// 3. Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function sumoddto1000(){
    var sum = 0
    for(var i = 1; i <= 5000; i++){
        if (i%2 == 1){
            sum += i;
        }
    }
    return sum;
}
var display = sumoddto1000();
console.log(display);

// 4. Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function sumarray(array){
    var sum = 0
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}
var array = [1,2,3];
var display = sumarray(array);
console.log(display);

// 5. Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function findmax(array){
    var max = array[0]
    for(var i = 1; i < array.length; i++){
        if (array[i] > max){
            max = array[i];
        }
    }
    return max;
}
var array = [7,2,3];
var display = findmax(array);
console.log(display);

// 6. Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function average(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum/array.length;
}
var array = [7,2,3];
var display = average(array);
console.log(display);

// 7. Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function oddarray(){
    var array = [];
    for(var i = 1; i <= 50; i++){
        if (i%2 == 1){
            array.push(i)
        }
    }
    return array;
}
var display = oddarray(array);
console.log(display);

// 8. Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterthany(array,Y){
    var count = 0;
    for(var i = 0; i < array.length; i++){
        if (array[i] > Y)
        {
            count++;
        }
    }
    return count;
}
var array = [7,2,3];
var display = greaterthany(array,2);
console.log(display);

// 9. Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function squares(array){
    var arraysq = [];
    for(var i = 0; i < array.length; i++){
        arraysq.push(array[i]*array[i])
    }
    return arraysq;
}
var array = [7,2,3];
var display = squares(array);
console.log(display);

// 10. Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function negatives(array){
    for(var i = 0; i < array.length; i++){
        if(array[i]<0){
            array[i] = 0;
        }
    }
    return array;
}
var array = [7,2,-3];
var display = negatives(array);
console.log(display);

// 11. Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function maxminavg(array){
    var max = array[0];
    var min = array[0];
    var sum = array[0];
    for(var i = 1; i < array.length; i++){
        if (array[i] > max){
            max = array[i];
        }
        if (array[i] < min){
            min = array[i];
        }
        sum += array[i];
    }
    var mmaarray =[max,min,sum/array.length];
    return mmaarray;
}
var array = [7,2,3];
var display = maxminavg(array);
console.log(display);

// 12. Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swapvalues(array){
    var first = array[0];
    array[0] = array[array.length-1];
    array[array.length-1] = first;
    return array;
}
var array = [7,2,3];
var display = swapvalues(array);
console.log(display);


// 13. Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function negatives(array){
    for(var i = 0; i < array.length; i++){
        if(array[i]<0){
            array[i] = 'Dojo';
        }
    }
    return array;
}
var array = [7,2,-3];
var display = negatives(array);
console.log(display);
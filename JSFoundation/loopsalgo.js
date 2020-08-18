
// 1. Print odds 1-20
for(var i = 1; i <= 20; i+=2){
    if(i % 2 == 1){
        console.log(i);
    }
}

// 2. Sum and Print 1-5
var sum = 0;
for(var i = 1; i <= 5; i+=1){
    console.log("Num: " + i);
    sum += i;
    console.log("Sum: " + sum);
}
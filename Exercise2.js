let celcius = 15;

let fahrenhiet = ((celcius *9)/5) +32;
console.log("the degree in fahrenhiet",fahrenhiet);

let number = 49

if (number%2){
    console.log("odd");
}else{
    console.log("even");
}

let prime = "is  prime";

for (let i = 2; i < number;  i++){
    if (number % i === 0  ){
        prime = "is not prime";
        break;
    }

}
console.log(prime)

let n = 3;
let sum = 0;
let fact = 1;
for (let i = 1; i < n +1; i ++){
    sum = sum +i;
}
console.log("sum is",sum)
for (let i = 1; i < n +1; i ++){
    fact = fact*i;
}
console.log("factorial is ", fact)


let seq = 15
let fib = 0
let pfib =0
for (let i = 1;i < seq+1; i ++){
    if (fib >0){
        fib = fib + pfib;
        pfib = fib - pfib;
    }else{
        fib = fib+1;
    }
}

console.log("fibonacci sequence number", seq, "is", fib)

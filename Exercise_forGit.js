seq = 9

for (i = 1; i< seq+1; i++){
    console.log(9," x ", i, "=",9*i);
}

let M_string = "palindrome"
let S_string = "Madam"

if (M_string === S_string){
    console.log("Yes the String is Palindrome");
}else{
    console.log("No the string is not Palindrome");
}

let Centimeters = 100000
console.log ( Centimeters/ 100000 , "Km")

let money = 100000

console.log("Rp " +money.toLocaleString('en-US', {minimumFractionDigits:2}))
/*
below is the exercise sesion3
*/
let First_string = "TEstIng HAlo "
var string = First_string.split("")
console.log(string.length)
for (let i = 0; i <string.length; i ++){

    if (string[i]===string[i].toUpperCase()  ){

        string[i] = string[i].toLowerCase()

    }else if (string[i]===string[i].toLowerCase()  ){
        string[i] =string[i].toUpperCase()
    }


}
var joinArray = string.join("")
console.log(joinArray)

let num1 = 12;
let num2 = 16;

if (num1 > num2 ){
    console.log("num1 is bigger.", num1);
}else{
    console.log("num2 is bigger.", num2);
}


let num3 = 13;

if (num1 < num2 && num1 < num3 && num2 < num3){
    console.log("sorted", num1, num2, num3);
};
if (num1 < num2 && num1 < num3 && num3 < num2){
    console.log("sorted", num1, num3, num2);
}

if (num2 < num1 && num2 < num3 && num1 < num3){
    console.log("sorted", num2, num1, num3)
}
if (num2 < num1 && num2 < num3 && num3 < num1){
    console.log("sorted", num2, num3, num1)
}
if (num3 < num1 && num3 < num2 && num1 < num2){
    console.log("sorted", num3, num1, num2)
}
if (num3 < num1 && num3 < num2 && num2 < num1){
    console.log("sorted", num3, num2, num1)
}

let test1 = "";
let test2 = 6.95;
let input = true

if(typeof input === typeof test1){
    console.log(1)
}else if(typeof input === typeof test2){
    console.log(2)
}else{
    console.log(3)
}

let text = "An apple fell from the tree";
var strings = text.split("");

let new_text = "";

for (let i =0 ; i < strings.length; i++){
    
    if (strings[i] === "a" || strings[i] ==="A"){

        strings[i] = "*";
    }
    new_text = strings.join("");
}

console.log(new_text)


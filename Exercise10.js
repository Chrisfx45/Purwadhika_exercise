alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function to_num(str){
    let array = str.split("")
    let num = 0
    let sum = 0
    for (let i = array.length-1; i > -1; i --){
       for (let j = 0 ; j <alphabet.length;j ++  ){
        if (array[array.length-1-i] == alphabet[j]){
            num =  (26**(i))*j
        }
       }
       sum += num
    }
    return sum
}
console.log(to_num("DIMAS"))

function singles(arr){
    let flag = true;
    for (let i = 0 ; i < arr.length; i++){
        for (let j = 0 ; j < arr.length; j++){
            if (i !== j && arr[i] == arr[j]){
                flag = false
            }
        }
        if (flag){
            return arr[i]
            break;
        }else{
            flag = true
        }
    }
}

console.log (singles([2,2,1]))

function anagram(str1, str2){
    arr1 = str1.split("").sort()
    arr2 = str2.split("").sort()
    flag = true
    for (let i = 0 ; i < arr1.length; i ++){
        if (arr1[i] !== arr2[i]){
            flag = false
            return flag
            break;
        }
    }
    return flag
}
console.log (anagram("rat", "car"))



function steps_cal(steps){
    let fib = 0
    let pfib =0
    seq = steps+1
    for (let i = 1;i < seq +1 ; i ++){
        if (fib >0){
            fib = fib + pfib;
            pfib = fib - pfib;
        }else{
            fib = fib+1;
        }
    }
    return fib
}

console.log(steps_cal(5))




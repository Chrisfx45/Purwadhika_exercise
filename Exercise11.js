function majority(arr){
    let num = 0
    let num1 = 0
    let count = 0
    let count1 = 0
    arr1 = arr.sort()

    for (let i =0 ; i < arr1.length ; i ++){
        if (i == 0){
            num1 = arr1[i]
            count1 += 1  
        }else{
            if (arr1[i] == num1){
                count1 += 1
            }else{
                if (num1 != arr1[i] && count1 >= count){
                    num = arr1[i-1]  
                    count = count1 
                    num1 = arr1[i]
                    count1= 1
                }else{
                    num1 = arr1[i]
                    count1= 1
                }
            }
        }
    }
    if (count1> count){

        return (count1> arr1.length/2) ? num1:-1
    }else{
        
    return  (count> arr1.length/2) ? num:-1
    }
}
console.log (majority([47,47,72,47,72,47,79,47,12,92,13,47,47,83,33,15,18,47,47,47,47,64,47,65,47,47,47,47,70,47,47,55,47,15,60,47,47,47,47,47,46,30,58,59,47,47,47,47,47,90,64,37,20,47,100,84,47,47,47,47,47,89,47,36,47,60,47,18,47,34,47,47,47,47,47,22,47,54,30,11,47,47,86,47,55,40,49,34,19,67,16,47,36,47,41,19,80,47,47,27]))

function Roman_int(s) {
    array = s.split("")
    let value = 0
    for (let i =0; i < array.length; i ++){
        if (array[i]== "I"){
            if (array [i +1] =="X"|| array [i +1] =="V" ){
                value --
            }else{
                value++
            }
        }
        if (array[i]== "V"){
        value = value +5
        }
        if (array[i]== "X"){
            if (array [i +1] =="L"|| array [i +1] =="C" ){
                value = value -10
            }else{
                value = value + 10
            }
        }
        if (array[i]== "L"){
        value = value +50
        }
        if (array[i]== "C"){
            if (array [i +1] =="D"|| array [i +1] =="M" ){
                value = value -100
            }else{
                value = value + 100
            }
        }
        if (array[i]== "D"){
        value = value +500
        }
        if (array[i]== "M"){
        value = value +1000
        }
        
    }
    return value
    
};

console.log (Roman_int("MCMXCIV"))




function pascals(h) {
    if (h === 1) return [[1]];
    let result = [];
    for (let i = 1; i <= h; i++) {
        let arr = [];
        for (let j = 0; j < i; j++) {
            if (j === 0 || j === i - 1) {
                arr.push(1);
            } else {
                arr.push((result[i-2][j-1] + result[i-2][j]));
            }
        }
        result.push(arr);
    }
    return result;
}
console.log (pascals(3))

function profit (arr){
    let max = 0
    for (let i = 0; i < arr.length; i ++){
        for (let j = 0 ; j < arr.length; j ++){
            if (j> i && max < arr[j] - arr[i] ){
                max = arr[j]- arr[i]
            } 
        }
    }
    return max
}

console.log (profit([7,1,5,3,6,4]))
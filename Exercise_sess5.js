let arr = [15, 6, 7, 8, 9 ,15, 99, 100, 22, 35, 22, 1]

function max_min_avg(arr) {
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    let sum = 0
    for (let i = 0; i < arr.length ; i ++){
        sum = sum + arr[i];
    }
    return ([max, min , sum/arr.length])
}


console.log(max_min_avg(arr))



let arrs = ["Chris", "Reg", "Mathew"]

function and (arr){
    let text = ""
    for (let i = 0; i < arr.length; i ++){
        if (i == arr.length-1){
            text += "and " + arr[i]
        }else{
            text += arr[i ]+ ", "
        }
    
    }
    return text;
}

console.log(and (arrs))

function splits(text){
    let arr = text.split(" ")
    return arr
}
console.log(splits("Hello World"))

function addi(arr1, arr2){
    let arr3 =[]
    for (let i=0 ;i < arr1.length; i ++ ){
        arr3[i] = arr2[i] + arr1[i]

    }
    return arr3
}
let arr1 = [1,2,3,4]
let arr2 = [4,3,2,1]
console.log(addi(arr1, arr2))


function add_elements(arr, neww){
    let new_arr = arr.concat(neww)
    return new_arr

}

let arrs1 = [1,2,3,4,5,6,7]

console.log(add_elements(arrs1, 8))


function remove_even(arr){
    for (let i = 0; i < arr.length; i ++){
        if (arr[i]%2 == 0){
            let spliced = arr.splice(i, 1);   
            i--
        }
    }
    return arr
}
let arrrs2 = [1,2,2,3,4,5,6,6,8,8,9]
console.log (remove_even(arrrs2))
let arrrs3 = [1,2,2,3,4,5,6,6,8,8,9]
function limit(arr,n){
    let spliced = arr.splice(n-1, arr.length-n);   
    return arr
}

console.log(limit(arrrs3, 5))
let array1 =[1,2,3,4]
let array2 = [5,6,7,8]
function combine(arr1, arr2){
    let new_array= arr1.concat(arr2)
    return new_array
}
console.log(combine(array1, array2))

let array3=[1,2,2,2,3,4,5,5,6,6,7]
function find_dups(arr){
    let dups = 0
    for (let i = 0; i < arr.length; i ++){
        for(let j = 0; j < arr.length; j++){
            if (i != j){
                dups ++
            }

        }
        if(dups ==0){
            let splice = arr.splice(i,1)
        }
        
    }
    return arr
}
console.log(array3)
let obj1 = {a : 1}
let obj2 = {a : 5}

function isSame(obj1, obj2){
    let determiner = Object.keys(obj1).length > Object.keys(obj2).length ? obj1: obj2
     for (key in determiner){
        if (obj1[key] != obj2[key]){
            return false;
        }
     }
     return true;
}
let obja = {a:1, b:2};
let objb = {a:1, b:2, c:1 }

console.log(isSame(obja,objb))

function intersection(obj1, obj2){
    let result= {}
    let determiner = Object.keys(obj1).length > Object.keys(obj2).length ? obj1: obj2
    for (key in determiner){
        if (obj1[key]== obj2[key]){
            result[key]=obj1[key]
        }
    }
    return result
}
console.log(intersection(obja,objb))
function merge (arr1, arr2){
    for(let i = 0 ; i < arr1.length; i ++){
        let flag = true;
        for (let j = 0 ; j < arr2.length; j ++){
            if (arr1[i].name == arr2[j].name){
                flag= false;
                break;
            }
        }
        if (flag){
            arr2.push(arr1[i])
        }
    }
    return arr2
}
let arr1 = [{name:"Student1", email:"student1@email.com"},
            {name:"Student2", email:"student2@email.com"}]

let arr2 = [{name:"Student2", email:"student2@email.com"},
            {name:"Student3", email:"student3@email.com"}]

console.log (merge(arr1, arr2))
function switchs (obj) {
    let newobj = {}
    for(key in obj){
        newobj[obj[key]] = key
    }
    return newobj

}
console.log (switchs({name: "dave", Age: 7}))

function factorial(num){
    if (num>1){
        return num *factorial(num-1)
    }else{
        return 1
    }
}
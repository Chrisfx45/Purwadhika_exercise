function triangle(height) {
    var line = "";
    for (var i = 1; i <= height; i++) {

        let text = "";
         for(var j=1; j<=i; j++){ 
            text = j.toLocaleString('en-US', {minimumIntegerDigits: 2});
            line += text +"  ";
        }
        line+="\n";
  
    }
    return line + "\n";
  }
  console.log(triangle(5));


function triangle1(height) {
    let num = 0;
    var line = "";
    for (var i = 1; i <= height; i++) {
        let text = "";
        for(var j=1; j<=i; j++){ 
            num ++
            text = num.toLocaleString('en-US', {minimumIntegerDigits: 2})
            line += text +"  ";
        }
        line+="\n";
    }
    return line + "\n";
  }
console.log(triangle1(5));


function check(length){
    let  line = ""
    for(let i = 1; i <= length; i ++){
        let num =""
        if (i%3 == 0){

            line += "Fizz, "
        }else if (i%5 == 0){

            line += "Buzz, "
        }else{
            num = i.toString()
            line = line + num + ", "

        }
    }
    return line

}
console.log(check(10))


function BMI_cal (weight){
    return function(height){
        let BMI =weight/(height**2)
        if(BMI<18.5){
            return "less weight";
        }else if(BMI>=18.5 && BMI<25){
            return "ideal";
        }else if(BMI>=25 && BMI<30){
            return "overweight";
        }else if(BMI>=30 && BMI<40){
            return "very overweight";
        }else{
            return "obese"
        }
    }
}
console.log(BMI_cal(70)(1.7))

let arrr = [1,2,3,4,5,6,7,8,9,10]
function remove_odd (arrr){
    let new_arr = []
    for (let i = 0; i < arrr.length; i ++){
        if (arrr[i]%2 != 0){
            let spliced = arrr.splice(i, 1);
            
            
        }

    }
    new_arr = arrr
    return new_arr
}

console.log(remove_odd(arrr))

let texts = "Hello New World"

function splitter (text){
    let arrays = text.split(" ")
    return arrays
}


console.log(splitter(texts))
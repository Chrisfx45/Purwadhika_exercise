function triangle(height) {
    var line = "";
    for (var i = 1; i <= height; i++) {

        let text = "";
         for(var j=1; j<=i; j++){ 
            text = j.toString()
            line += "0" + text +"  ";
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
            text = num.toLocaleString('en-US', {
                minimumIntegerDigits: 2})
            line += text +"  ";
        }
        line+="\n";
    }
    return line + "\n";
  }
  console.log(triangle1(5));


  
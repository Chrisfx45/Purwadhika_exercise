const students = [
    {Name: "Chris", Email: "something@mail.com",Age: 23, Score: 80 },
    {Name: "Mathew", Email: "smtg@mail.com", Age: 25, Score: 90 },
    {Name: "Nick", Email: "someone@mail.com", Age: 27, Score: 100 },
    {Name: "Alina", Email: "fake@mail.com", Age: 21, Score: 85 },
    {Name: "Ali", Email: "troll@mail.com", Age: 21, Score: 75 }
]
function max_min(students) {
    var result = {
        Score:
        {
            max: 0,
            min: 0,
            avg: 0
        },
        Age:{
            max: 0,
            min: 0,
            avg: 0
        }

    }
    let S_sum = 0
    let A_sum = 0 
    for (let i = 0; i < students.length  ;i ++){
        S_sum += students[i].Score
        A_sum += students[i].Age
        if (i == 0){
            result.Score.max= students[i].Score
            result.Score.min= students[i].Score
            result.Age.max = students[i].Age
            result.Age.min = students[i].Age

        }else{
            if(result.Score.max< students[i].Score){
                result.Score.max = students[i].Score
            }
            if (result.Score.min> students[i].Score){
                result.Score.min = students[i].Score
            }
            if(result.Age.max< students[i].Age){
                result.Age.max = students[i].Age
            }
            if (result.Age.min> students[i].Age){
                result.Age.min = students[i].Age
            }
        }
    }
    result.Score.avg = S_sum/ students.length
    result.Age.avg = A_sum/ students.length
    return result
}


console.log( max_min(students))



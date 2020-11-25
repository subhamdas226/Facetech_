
const fs = require('fs');
// const prompt = require('prompt-sync')();

// var input = prompt();
// input = Number(input)

// getStudentsWithMarksMoreThan(input);

function getStudentsWithMarksMoreThan(input){
        //var input = 40;
    const loadFile = (() =>{
        try{
            const jsonfile = fs.readFileSync('file.json').toString();
            return JSON.parse(jsonfile);
        }
        catch(err){
            return [];
        }
        
    })
    let ar_marks = [];
    const readFile = () =>{
        const file = loadFile();
        
        file.students.forEach(student => {
            var detail = student.details;
        // console.log(detail)
            var mark = detail.marks;
            // console.log("Marks :", marks);

            if(mark>input){
                console.log(mark);
                ar_marks.push(mark)
               // return mark
            }
            else{
                // console.log("your marks is low")
                return ;
            }
        });
    
    }

    readFile();
    console.log(ar_marks)
    return ar_marks;
}

module.exports = {
    getStudentsWithMarksMoreThan : getStudentsWithMarksMoreThan
};

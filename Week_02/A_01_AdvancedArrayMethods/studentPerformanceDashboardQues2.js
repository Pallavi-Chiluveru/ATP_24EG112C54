// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
        let pass = students.filter(stu=>stu.marks>=40)
        console.log("Students who passed (marks ≥ 40)",pass)

//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D
       let gradeField = students.map(stu=>{
        if(stu.marks>=90)
            stu.grade="A"
        else if(stu.marks>=75)
            stu.grade="B"
        else if(stu.marks>=60)
            stu.grade="C"
        else
            stu.grade="D"

        return stu
       })
       console.log("",gradeField)

//    3. reduce() to calculate average marks
       let avgMarks = students.reduce((acc,stu)=>acc+stu.marks,0)/5
       console.log("Calculate average marks : ",avgMarks)

//    4. find() the student who scored 92
       let stuScore = students.find(stu=>stu.marks==92)
       console.log("Student who scored 92 : ",stuScore)

//    5. findIndex() of student "Kiran"
       let stuIndex = students.findIndex(stu=>stu.name=="Kiran")
       console.log("Index of StudentKiran : ",stuIndex)
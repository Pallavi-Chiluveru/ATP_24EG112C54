// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// Tasks:
//     1. filter() employees from IT department
        let empIT = employees.filter(emp=>emp.department=="IT")
        console.log("Employees from IT department : ",empIT)

//     2. map() to add:
//             netSalary = salary + 10% bonus
        let netSalary = employees.map(emp=>emp.salary+emp.salary*10/100)
        console.log("Each employee salary with 10% bonus : ",netSalary)

//     3. reduce() to calculate total salary payout
        let totalSal = employees.reduce((acc,emp)=>{
          return acc+emp.salary
        },0)
        console.log("Calculate total salary payout : ",totalSal)
     
//     4. find() employee with salary 30000
        let findSal = employees.find(emp=>emp.salary==30000)
        console.log("Employee with salary 30000 : ",findSal) 

//     5. findIndex() of employee "Neha"
        let findIndex = employees.findIndex(emp=>emp.name=="Neha")
        console.log("Index of employee Neha : ",findIndex)



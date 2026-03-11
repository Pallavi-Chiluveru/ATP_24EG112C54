// Assignment 1: 
// -------------
// Task Management System (ToDo App Modules):
//      Building a task manager like Todoist

// Requirements:
//      Create a modular todo app with 3 separate files:

       
          
//         i. validator.js - Input validation
                      
//                       // 1. Validate task title (not empty, min 3 chars)
                             function validateTitle(title) {
                                if(title && title.length>=3){
                                    console.log("Valid Title")
                                return true
                                 }
                                else{
                                    console.log("Invalid Title")  
                                return false
                                }           
                             }
                      
//                       // 2. Validate priority (must be: low, medium, high)
                             function validatePriority(priority) {
                                if(priority==="low"||priority==="medium"||priority==="high"){
                                    console.log("Valid Priority")
                                    return true
                                }
                                else{
                                    console.log("Invalid Priority")
                                    return false
                                }
                             }
                      
//                       // 3. Validate due date (must be future date)
                             function validateDueDate(date) {
                                let currentDate = new Date()
                                let dueDate = new Date(date)
                                if(dueDate>currentDate){
                                    console.log("Valid Date")
                                    return true
                                }
                                else {
                                    console.log("Invalid Date")
                                    return false    
                                }
                             }

 // TODO: Export these validation functions
 export{validateTitle,validatePriority,validateDueDate}
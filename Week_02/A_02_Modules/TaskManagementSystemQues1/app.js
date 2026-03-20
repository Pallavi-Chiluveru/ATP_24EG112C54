
//       iii. app.js - Main application
//                   // TODO: Import task functions import {addTask,getAllTasks,completeTask} from './task.js';
import {addTask,getAllTasks,completeTask} from './task.js';
//Test your module system
// 1. Add some tasks
   console.log(addTask("Finish ATP module", "high", "2024-07-01"));
   console.log(addTask("Buy groceries", "medium", "2024-11-02"));
   console.log(addTask("Call mom", "low", "2024-07-03"));   
//2. Display all tasks
   console.log("All Tasks:", getAllTasks());
//3. Complete a task
   const allTasks = getAllTasks();
   if (allTasks.length > 0) {
       const taskIdToComplete = allTasks[0].id; // Complete the first task
       console.log(completeTask(taskIdToComplete));
   }
//4. Display all tasks again
   console.log("All Tasks after completion:", getAllTasks());





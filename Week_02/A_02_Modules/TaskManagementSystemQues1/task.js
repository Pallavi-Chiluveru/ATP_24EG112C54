
  //        ii. task.js - Task operations
//                     // TODO: Import validator functions
import{validateTitle,validatePriority,validateDueDate} from './validator.js';
                    
                     const tasks = [];
                    
//                     // 1. Add new task
                           function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                         if (!validateTitle(title)) {
                      // If invalid, return error message
                            return { success: false, message: "Invalid task title" };
                         }
                      // If valid, add to tasks array
                         const newTask = {
                            id: Date.now(), // Unique ID based on timestamp
                            title,
                            priority,
                            dueDate,
                            completed: false
                         };
                         tasks.push(newTask);
                         return { success: true, message: "Task added successfully" };
                      }

//                     // 2. Get all tasks
                           function getAllTasks() {
                      // Return all tasks
                               return tasks;
                           }
                    
//                     // 3. Mark task as complete
                           function completeTask(taskId) {
                      // Find task and mark as complete
                                   const task = tasks.find(t => t.id === taskId);
                                   if (task) {
                                           task.completed = true;
                                              return { success: true, message: "Task marked as complete" };
                                   } else {
                                              return { success: false, message: "Task not found" };
                                   }    
                           }

     // Export functions
     export{addTask,getAllTasks,completeTask}

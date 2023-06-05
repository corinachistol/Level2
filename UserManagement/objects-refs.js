


//OBJECT REFERENCES / Tree Like Object Structures

//  *direction: forward, reverse, bidirectional
//  *one - one, one- many , many- many
//  *parent,child,...
//  *type 
//  *algorithms: traverse, modify, delete , add to the structure


// TASK MANAGEMENT / TO Do List

//TYPE
class Task {
    constructor (title, deadline, done) {
        this.title    = title
        this.deadline = deadline
        this.done = false

        this.assignee = null  // --->reference to an User() object

    }

    //HW1:
    markAsDone(  ) {
        if(this.done === false){
            this.done  = true 
        }
    }
    
   
}

class User {
    constructor(name, job) {
        this.name = name
        this.job  = job

        this.tasks = []  // references --->Array of tasks
    }

    assignTask( task ) {
        if(task instanceof Task) {
            this.tasks.push(task)
            task.assignee = this
        }else{
            console.error("Only objects of type Task can be assigned")
        }
    }

   
    
    // allDoneTasks(task) {
    //     if(task instanceof Task &&) {
    //         return 

    //     }
        
    // }
}

//give 2 tasks to a user
let taskProject1 = new Task ("finish project 1", "01-01-2023")
let taskProject2 = new Task ("finish project 2", "01-02-2023")

taskProject1.markAsDone() // functioneaza 
userDev.markAsDone(taskProject1) // asa nu functioneaza


let userDev = new User ("John Doe", "developer")

userDev.assignTask(taskProject1)
userDev.assignTask(taskProject2)




// HW1: Modify the Task class adding "done " property which by default will be false
//      add the method "markAsDone()" in the Task class that changes the property done to true 

// HW2:Add the method " allDoneTasks()" which should return an arraywith the tasks "done"=true  in user class
//      Add the method " allPendingTasks()" which should return an arraywith the tasks "done"=false

//HW3: Add the method "unassignTask(title)" in User which will remove the task with this title

 
/*

    taskProject1 (child)
        .assignee ------
                        |   
    taskProject2 (child)|
        .assignee ----  |
                    |   |
                    v   v
                   userDev ( parent)


    userDev-----------> Array [ 0         1]
                                |           |
                                |           |
                                v           |
                            taskProject1    v
                                        taskProject2

*/
 

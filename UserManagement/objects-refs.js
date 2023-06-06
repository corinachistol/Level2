


//OBJECT REFERENCES / Tree Like Object Structures

//  *direction: forward, reverse, bidirectional
//  *one - one, one- many , many- many
//  *parent,child,...
//  *type 
//  *algorithms: traverse, modify, delete , add to the structure


// TASK MANAGEMENT / TO Do List

//TYPE
class Task {
    constructor (title, deadline) {
        this.title    = title
        this.deadline = deadline
        this.done     = false

        this.assignee = null  // --->reference to an User() object

    }

    //HW1:
    markAsDone( ) {
        this.done  = true 
        
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

    //HW:3
    unassignTask(title) {
        //this.tasks = this.tasks.filter( task => task.title != title )
        
        //HW2:rewrite the solution with findIndex() + splice()   
        // aici se primeste conditia inversa a lui filter
        let index =  this.tasks.findIndex( task => task.title = title )
        
        // taskul eliminat ar trebui sa devina available pentru alt user
        this.done[index] = false
        return this.tasks.splice(index, 1) 

        // using for + if create a copy
    }

   
    //HW2:
    allDoneTasks() {
        //return this.tasks.filter( task => task.done )
        //return this.tasks.map(task => task.done)       // functioneaza


        //HW1:rewrite the solution using for =if
        //solution with for+if, dar imi da eroare "TypeError: Cannot read properties of undefined (reading '0')"

        for(let i = 0; i < this.tasks.length; i++){
            let copyTasks = []
            if (this.tasks.done[i] == true) {
               return copyTasks.push(this.tasks.done[i])
            }
        }

  
        
              //eu asa scriam pina a vedea partea a 2 a tutorialului
        // let doneTasks = this.tasks.map( (task,idx) => {
        //     task[idx].done = true
        //     return doneTasks
        // } )
        
    }

    //HW2:  
    allPendingTasks() {
      
        return this.tasks.filter( task => !task.done )    
 
    }
}

//give 2 tasks to a user
let taskProject1 = new Task ("finish project 1", "01-01-2023")
let taskProject2 = new Task ("finish project 2", "01-02-2023")
let taskProject3 = new Task ("finish project 3", "01-03-2023")
let taskProject4 = new Task ("finish project 4", "01-04-2023")

//taskProject2.markAsDone() // functioneaza 

let userDev = new User ("John Doe", "developer")

userDev.assignTask(taskProject1)
userDev.assignTask(taskProject2)
userDev.assignTask(taskProject3)
userDev.assignTask(taskProject4)




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
 
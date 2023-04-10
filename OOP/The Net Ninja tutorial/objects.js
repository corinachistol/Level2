//Encapsulation = introducerea datelor referitor la un obiect "userOne" in capsula respectiva {}

// let userOne = {
//     email: "ryu@ninjas.com",
//     name: "Ryu",
//     //ES6 shorter version vs login:function (){}
//     login(){
//         console.log(this.email, 'has logged in')
//     },
//     logout(){
//         console.log(this.email, 'has logged out')
//     }
// };





// Classes (ES6) functioneaza dupa acelasi model cu prototype in JS.  Clasele ne permit sa cream mai multe obiecte cu aceleasi proprietati, este un scheleton pentru un tip de obiecte in care putem adauga doar valorile respective obiectului nou creat. Clasele sunt denumite cu UpperCase "User {}"

//Constructor sunt functii speciale menite sa creeze obiecte cu aceleasi proprietati si sa le seteze valori.

//Incampsulam toate proprietatile si metodele ce tin  de user in Clasa "User"

class User {
    constructor(email, name){  
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email, "just logged in")
        return this
    }
    logout() {
        console.log(this.email, "just logged out")
        return this
    }
    updateScore(){
        this.score++
        console.log(this.email, "score is now", this.score);
        return this;
    }
}


//Class Inheritance
class Admin extends User {
    deleteUser(user){
        users = users.filter( u=> {
            return u.email != user.email
        })
    }

}

let userOne = new User("Ryu@ninjas.com", "Ryu");
let userTwo = new User("Yoshi@mariokorp.com", "Yoshi");
let admin = new Admin("shaun@ninjas.com", "shaun");


let users = [userOne, userTwo,admin]

//admin.deleteUser(userOne)

console.log(users)

// console.log(userOne)
// console.log(userTwo)



    //   the "new" keyword
    // * creates a new empty object{ }
    // * sets the value of "this" to be the new empty object
    // * call the constructor method

//Method chaining
userOne.login().updateScore().updateScore().logout()

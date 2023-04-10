//constructor function User, not using constructor class keyword anymore.  This constructor fn now represents our User class, it creates User objects.
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    
}

//Only the constructor function has this prototype
User.prototype.login = function (){
    this.online = true;
    console.log(this.email, 'has logged in');

}
User.prototype.logout = function (){
    this.online = false;
    console.log(this.email, 'has logged out');

}

let userOne = new User("Ryu@ninjas.com", "Ryu");
let userTwo = new User("Yoshi@mariokorp.com", "Yoshi");

console.log(userOne);
userTwo.login();


//Prototype = 
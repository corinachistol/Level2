
// const blogs= [
//     { title:"why mac & cheese rules", likes:30 },
//     { title:"10 thinks to make woth marmite", likes:50 }
// ];

// console.log(blogs)

let user = {
    name: "crystal",
    age:30,
    email: "crystal@thenetninja.co.uk",
    location: "berlin",
    blogs:[
        { title:"why mac & cheese rules", likes:30 },
        { title:"10 thinks to make woth marmite", likes:50 }
    ],
    login(){
        console.log("The user logged in");
    },
    logout() {
        console.log("The user logged out")
    },
    logBlogs() {
        //console.log(this.blogs)
        console.log("this user has written the following blogs:");
        this.blogs.forEach( blog=>{
            console.log(blog.title, blog.likes)
        } )
    }
};

// user.login()
// user.logout()
//user.logBlogs()
// console.log(this)


// console.log(user);
// console.log(user.name);

// //user.age  = 35;
// console.log(user.age);

// console.log(user["location"])
// user["name"] = "chun-li"

// console.log(user["name"])

// console.log(typeof user)


/*
//Math.object

console.log(Math)
console.log(Math.PI)
console.log(Math.E)

const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//random numbers
const random = Math.random();
console.log(random)
console.log(Math.round(random * 100));
*/

//primitive value
//daca modificam valoarea primei variabile,nu se modifica valoarea celei de a doua

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo:${scoreTwo}`)
// scoreOne = 100;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo:${scoreTwo}`)

//reference type
//daca modificam o valoare din primul obiect ,se modifica valoarea respectiva si din obiectul al doilea

const userOne = {name:"ryu", age:30};
const userTwo = userOne;

console.log(userOne, userTwo)

userTwo.age = 40; 
console.log(userOne, userTwo);

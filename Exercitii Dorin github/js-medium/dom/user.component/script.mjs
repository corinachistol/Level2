import  User from "./User.mjs";
import { faker } from "https://cdn.skypack.dev/@faker-js/faker@v7.4.0?dts"


let users = []
console.log(users)

function generate_users(number){
    // ???

     users = new Array(number)
                .fill()
                .map(()=>{
                    let username=faker.name.firstName()
                    let avatar = faker.image.avatar()
                    let date = new Date(faker.date.past()).toLocaleDateString()
                    return new 
                        User(username, `${username}@gmail.com`, avatar , date )
                })
    console.log(users)
    return users
}


function render_users(root){
    // ???
    let divUsers = document.getElementById(root)
    divUsers.innerHTML = users.map(user=>{
        return `
            <div class=user>
                <h2>${user.username} - username (${user.email})</h2>
                <img src=${user.avatar}/>
                <small>${user.created}</small>
                <hr>
            </div>
        `
    }
    )
    

    return divUsers

}


generate_users(3)
render_users("users")
const USER_STYLES = {
    color: "#555",
    padding: "10px",
    fontFamily: "Arial",
    backgroundColor: "#BBB",
    
    selectedColor: "#585",
    selectedBackgroundColor: "#DDD",
}


class User{
    constructor(username, email, avatar, created, selected){
        // ???
        this.username = username,
        this.email = email, 
        this.avatar = avatar,
        this.created = created,
        this.selected = false  
    }

    render(){
        // ???
        let divUsers = document.getElementById("users")
        let div = document.createElement("div")
        let h2 = document.createElement('h2')
        h2.innerHTML = `${this.username} - username (${this.email})`

        let img = document.createElement('img')
        img.innerHTML = `${this.avatar}`

        let small = document.createElement("small")
        small.innerHTML = `${this.created} `
        let hr = document.createElement("hr")

        div.append(img)
        div.append(h2)
        div.append(hr)
        div.append(small)    

        divUsers.appendChild(div)
        document.body.appendChild(divUsers)

        div.style.backgroundColor = USER_STYLES.backgroundColor
        div.style.color = USER_STYLES.color
        div.style.padding = USER_STYLES.padding
        div.style.fontFamily = USER_STYLES.fontFamily
        div.classList.add("user")
        
        // for (const key in USER_STYLES){
        //     if(USER_STYLES.hasOWnProperty(key)){
        //         divUsers.style[key] = USER_STYLES[key]
        //     }
        // }
        
        return divUsers

    }

    select(){
        // ???
        this.div.style.backgroundColor = USER_STYLES.selectedBackgroundColor
        this.div.style.color = USER_STYLES.selectedColor
        return this.selected = true


    }
    unselect(){
        // ???
    }
}

let user1 = new User("Nick", "nick@gmail.com",  ".....", 10/1/2024 )
let user2 = new User("Anne", "anne@gmail.com",  ".....", 5/1/2024 )

user1.render()
user2.render()
user2.select()
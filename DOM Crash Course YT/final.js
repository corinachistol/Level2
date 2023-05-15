
let form = document.getElementById("addForm")
let itemList = document.getElementById("items")
let filter = document.getElementById("filter")

//form submit event
form.addEventListener("submit", addItem);

//Delete event
itemList.addEventListener("click", removeItem)

//filter event
filter.addEventListener("keyup", filterItems)
//Add item
function addItem(e){
    e.preventDefault()

    console.log(1)

   //get input value
    let newItem = document.getElementById("item").value

    //create new li element
    let li = document.createElement("li")
    //Add a class
    li.className = "list-group-item"

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem) );


    //Create del button element

    let deleteBtn = document.createElement("button")

    //Add classes to btn
    deleteBtn.className = "btn btn-danger btn-sm float-right delete"

    //Append text node
    deleteBtn.appendChild(document.createTextNode("X") )

    //Append button  to li
    li.appendChild(deleteBtn)

    //Append li to list ul
    itemList.appendChild(li)
}

function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure?")){
            let li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
}

function filterItems(e){
    //convert to lowercase
    let text = e.target.value.toLowerCase()
    
    //get list
    let items = itemList.getElementsByTagName("li")

    //convert to array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent
       if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = "block"
       } else{
        item.style.display = "none"
       }
    })

}




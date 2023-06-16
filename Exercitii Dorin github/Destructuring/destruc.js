class Order {
    constructor( id, name, cost) {
        this.id = id
        this.name = name
        this.cost = cost
    }
}

let data = {
    orders:[
        new Order(10, "John", 100.00),
        new Order(11, "Marry", 150.00),
        new Order(12, "Jack", 200.00),
    ]
}

let clients = [ data.orders[0].name, data.orders[1].name, data.orders[2].name ]

//destructurizam obiectul data
// let { orders } = data
// console.log(orders)

//destructurizam array-ul orders
// let [a,b,c] = orders

// let [ { id,name, cost}] = orders
// console.log(id)

//avem nevoie de numele din fiecare array
let { orders: [ {id, name, cost } ] } = data
console.log([name])

// let [ {id,name,cost} ] = orders
// console.log([name])





//data  --> Orders [3]
// obj      array

const order = {
    quantity: 10,
    price: {
        amount:100,
        currency: "EUR"
    }
}

let { quantity, price:{ amount,currency } } = order
console.log(quantity,amount,currency)


const processOrder = ( {order} ) => {
    let cost = quantity * amount
    return cost
}
let totalCost = processOrder(order)

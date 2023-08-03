//video 00015__9
//HW1: add field 'id'
//HW2:make price --> {value:1.00, currency: "USD"}
//Hw3 remake print() --> align strin

//1. Salad         15.00 MDL
//2. Soup          25.00 MDL
//3. ....           ....
export class Item {
    constructor(id, name, price,) {
        this.id = id
        this.name = name
        this.price = price
        
    }

    print() {
        const idWidth = this.id.toString().padEnd(2, ' ')
        const nameWidth = this.name.padEnd(10, ' ')
        const valueWidth = parseFloat(this.price.value).toFixed(2).padEnd(6,' ')
        const currencyWidth = this.price.currency.padEnd(4, '')
      

        return `-------------------------------\n` + 
               `${idWidth}${nameWidth}${valueWidth}${currencyWidth}\n` +
               `---------------------------------` 
        }
}
export class Price{
    constructor(value, currency){
        this.value = value
        this.currency = currency
    }

}
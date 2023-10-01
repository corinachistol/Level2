// const anchor = document.querySelector('a')!
// //TS nu are access la index.html sa vada ca acolo este un anchor tag, de asta putem vefirica printr-un if prin prin !
// //Prin acest !, TS va oferi metodele si proprietatile DOM-ului obiectului anchor tag
// // if(anchor){
// //     console.log(anchor.href)
// // }

// console.log(anchor.href)

import { Invoice } from "./classes/invoice.js"
import { ListTemplate } from "./classes/ListTemplates.js";
import { Payment } from "./classes/Payments.js";
import { HasFormatter } from "./interfaces/hasFormatter.js";

// let docOne: HasFormatter
// let docTwo: HasFormatter

// docOne = new Invoice("yoshi", "werb work", 250)
// docTwo = new Payment("mario", "werb work", 200)

// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)
// console.log(docs)

// const invOne = new Invoice("mario", "work on the website", 250)
// const invTwo = new Invoice("luigi", "work on the website", 300)

// let invoices: Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)
// // console.log(invoices)

// //default behaviour of classes, all properties are public by default and anyone can have accesss to them
// // invoices.forEach(inv => { //invoice details outside of class method cannot be accessed
// //     console.log(inv.client, inv.details, inv.amount, inv.format())
// // })
// invoices.forEach(inv => {
//         console.log(inv.client, inv.amount, inv.format())
//     })
    

//GENERICS = allows us to create reusable block of codes which we can use with different types
const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid}
}

let docOne = addUID({name:"yoshi", age: 40})
// let docTwo = addUID("hello")

console.log(docOne.age)

//with Interfaces
interface Resource<T>{
    uid:number
    resourceName:string
    data: T
}

// const docThree: Resource<object> ={
//     uid:1,
//     resourceName: "person",
//     data: {nam:"shaun"}
// }

// const docFour: Resource<string[]> = {
//     uid: 2,
//     resourceName: "shoppingList",
//     data: ["bread","milk"]
// }

// console.log(docThree,docFour)

//ENUMS

enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource<T>{
    uid:number
    resourceType:ResourceType,
    data: T
}

const docFive: Resource<object> ={
    uid:1,
    resourceType: ResourceType.BOOK,
    data: {name:"shaun"}
}

const docSix: Resource<object> = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data:{name:"yoshi"}
}

console.log(docFive, docSix)

//typles-> daca specifici din start pozitia si tipul variabilei, mai tirziu nu o poti schimba, poti schimba doar continutul variabilei dar nu si tipul sau
//intrun arrays poti schibma cu locul variabilele
let arr = ['ryu', 25, true]
arr[0] = false
arr[1] = 'yoshi'
arr = [30, false, 'yoshi']

let tup: [string, number, boolean] = ['ryu', 25, true]
tup[0] = 'ken'
tup[1] = 40

let student: [string, number]
student = ['chun-li',22354]






// const form = document.querySelector('form')!
//In TS cind cautam un obiect din DOM cu ajutorul tagurilor, a,form -> il recunoaste ca "HTMLFormELement",
//cind cautam cu ajutorul claselor, el nu vede carui tag noi am atribuit clasa respectiva si il vede ca "Element" simplu, nu ca "HTMLFormElement". Pentru asta scrim "as HTMLFormElement"
const form = document.querySelector('.new-item-form') as HTMLFormElement

console.log(form.children)

//inputs
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#toFrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement


//list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)


form.addEventListener('submit', (e) => {
    e.preventDefault()

    let values: [string,string,number]
    values = [toFrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter
    if(type.value === 'invoice'){
        doc = new Invoice(...values)
    }else{
        doc = new Payment(...values)
    }

    list.render(doc, type.value, "end")
    
})





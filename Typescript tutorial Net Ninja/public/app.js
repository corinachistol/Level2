// const anchor = document.querySelector('a')!
// //TS nu are access la index.html sa vada ca acolo este un anchor tag, de asta putem vefirica printr-un if prin prin !
// //Prin acest !, TS va oferi metodele si proprietatile DOM-ului obiectului anchor tag
// // if(anchor){
// //     console.log(anchor.href)
// // }
// console.log(anchor.href)
import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplates.js";
import { Payment } from "./classes/Payments.js";
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
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "yoshi", age: 40 });
// let docTwo = addUID("hello")
console.log(docOne.age);
const docThree = {
    uid: 1,
    resourceName: "person",
    data: { nam: "shaun" }
};
const docFour = {
    uid: 2,
    resourceName: "shoppingList",
    data: ["bread", "milk"]
};
console.log(docThree, docFour);
//ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docFive = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { name: "shaun" }
};
const docSix = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: { name: "yoshi" }
};
console.log(docFive, docSix);
//typles-> daca specifici din start pozitia si tipul variabilei, mai tirziu nu o poti schimba, poti schimba doar continutul variabilei dar nu si tipul sau
//intrun arrays poti schibma cu locul variabilele
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
let tup = ['ryu', 25, true];
tup[0] = 'ken';
tup[1] = 40;
let student;
student = ['chun-li', 22354];
// const form = document.querySelector('form')!
//In TS cind cautam un obiect din DOM cu ajutorul tagurilor, a,form -> il recunoaste ca "HTMLFormELement",
//cind cautam cu ajutorul claselor, el nu vede carui tag noi am atribuit clasa respectiva si il vede ca "Element" simplu, nu ca "HTMLFormElement". Pentru asta scrim "as HTMLFormElement"
const form = document.querySelector('.new-item-form');
console.log(form.children);
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});

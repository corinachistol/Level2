const people = [
    { firstName: 'Sam', lastName: 'Hughes', YOB: 1978, department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', YOB: 1989, department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', YOB: 1985, department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', YOB: 1991, department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', YOB: 1988, department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', YOB: 1980, department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', YOB: 1982, department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', YOB: 1994, department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', YOB: 1977, department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', YOB: 1990, department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', YOB: 1985, department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', YOB: 1985, department: 'Development', salary: '39000' },
];


// 1) What is the average income of all the people in the array?
let income = 0
//const averageIncome = people.reduce((prev, salary)=> prev+item.salary, income)
// people.forEach(item => {
//     averageIncome =(averageIncome + item.salary) / 2
// })
// console.log(averageIncome)     //  CONSOLA  spune Type Error, dar nu vad greseala 

for(let i=0; i<people.length; i++) {
    income = (income + people[i].salary) / people.length
}
console.log(income) 




// 2) Who are the people that are currently older than 30?

const year = new Date().getFullYear()
const older30 = people
    .filter(item => (year - item.YOB >= 30))
    .sort((a,b)=> a.YOB-b.YOB)
console.log(older30)      //// WOW , am reusit singura , URAAAAAA . Sortul mi-a venit ulterior )))))))))))))))



// 3) Get a list of the people's full name (firstName and lastName).

const fullName = people.map(item =>  `fullName: ${item.firstName} ${item.lastName}`)
console.log(fullName)   ////DUPA MULTE CORECTARI SI INCERCARI, AM REUSIT




// 4) Get a list of people in the array ordered from youngest to oldest.

// AM FACUT MAI SUS OARECUM


// 5) How many people are there in each department?
const department = people.filter(item=> )
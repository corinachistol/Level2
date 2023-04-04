

/*
.*  cauta orice numar (.)in orice cantitate(*)
\d cifra,digit
+ minim un caracter
{2,3} cite caractere cauti de un anumit cifra
? este ceva optional
() grupuri de captura
*/

// Write a script to extract all amounts mentioned in a text


//say you have a text that contains ifo about diff amounts of money
//1.the amounts are with cents 1000.00...
//2.multiple currencies (EURO/EUR/ MDL/ USD//)

//write a function that gets this text and returns the sums

let text = `I have 1000.00 USD. 
I have 1000 00 USD.
I have 1000 USD.
I have 100.00EURO.
I have 100.00 EUR. 
I have 50,50 MDL.
I have 50$.
I have 100€`

const extractCurreny = (text) => {
    let r = /([0-9]+[., ]?[0-9]+[ ]?)(USD|EUR|EURO|MDL|\$|\€)/g
    const result = text.match (r)
    //const sorted = result.sort( (a,b)=> a.localeCompare(b))
    return result

    for( let i of result){
    console.log(i)
    }
}


console.log(extractCurreny(text));



"The cost of EUROPEAN version of Samsung S20 is 1000EUR. But i could sell it with 900EUR".replace(/([0-9]+)(EUR)/g, (m,g1,g2)=>{
    
    let amount = Math.floor(g1 * 1.1) 
        return `${amount}USD`
 } )
'The cost of EUROPEAN version of Samsung S20 is 1100USD. But i could sell it with 990USD'

"The cost of EUROPEAN version of Samsung S20 is 1000EUR. But i could sell it with 900EUR".replace(/([0-9]+)(EUR)/g, (m,g1,g2)=>{

    let amount = parseInt(g1 * 1.1) 
        return `${amount}USD`
 } )
'The cost of EUROPEAN version of Samsung S20 is 1100USD. But i could sell it with 990USD'

"The cost of EUROPEAN version of Samsung S20 is 1000EUR. But i could sell it with 900EUR".replace(/([0-9]+)(EUR)/g, (m,g1,g2)=>{

    let amount = g1 * 1.1 
        return `${amount}USD`
 } )
'The cost of EUROPEAN version of Samsung S20 is 1100USD. But i could sell it with 990.0000000000001USD'


// write a script that extracts email addresses and phone numbers from a text

let text1 = `My mail is: MARia_-.fasj19s@gmail.com with phone 063012548. Your email is: example@gmail.com with phone 063 01 25 48. His email is mario45._k@mail.ru with  phone nr: 0-693-215-66.Their emails are KristAl-d.2_A@yahoo.com with phone nr: +3736958956`

const extractPhone = (text1) => {
    let rp = /((\+373)?[ -])?(\d{1,3})[ -]?(\d{2,3})?[ -]?(\d{2,3})[ -]?(\d{2,3})[ -]?(\d{2,3})[ -]?/g

    const phoneNumbers =  text1.match(rp)
    return phoneNumbers 
}
console.log(extractPhone(text1))



const extractMail = (text1) => {
    let rm = /[a-zA-Z0-9._\-]+[@][a-z]+\.[a-z]{2,3}/g

    const emails =  text1.match(rm)
     
    return emails 
}
console.log(extractMail(text1))



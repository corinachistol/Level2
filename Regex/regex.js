//Meet 4-5

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

let text = `I have 1000.00USD. 
I have 1000USD.
I have 100.00EURO.
I have 100.00EUR. 
I have 50,50MDL.
I have 50$.
I have 100€`

const extractCurreny = (text) => {
    let r = /([0-9]+([\.,][0-9]+)?)(USD|EUR|EURO|MDL|\$|\€)/g
    const result = text.match(r)                   // ['1000.00 USD', '1000 00 USD', '1000 USD', '100.00EUR', '100.00 EUR', '50,50 MDL', '50$', '100€']
    const filtered = result.filter( v => (v.includes("USD") || v.includes("$") ))
    //const filtered1 = result.filter(v => ( v.endsWith("USD") || v.endsWith("$"))  )
    const splitted = filtered.toString()
    const converted = splitted.replace( /([0-9]+([\.,][0-9]+)?)(USD|\$)/g, (m,g1,g2) => { 
        let amount = g1*0.92 
        return `${amount}EUR`
     } ).split(",")
  

    for( let i of result){   
        console.log(i)
    }
    
    //[...result].forEach(  v=> console.log(v) ) = o alternativa a for-lui standart

    return [result,filtered,splitted, converted]
}
console.log(extractCurreny(text));




let res = []
const extractCurrency2 = (text) => {
    let r = /([0-9]+([\.,][0-9]+)?)(USD|EUR|EURO|MDL|\$|\€)/g
    let r_dollar = /([0-9]+([\.,][0-9]+)?)(USD|\$)/g
    let matches = text.matchAll(r)
    const filtered = [...matches]
                        .filter( v=> (v.includes("USD") || v.includes("$")))
    return filtered
                .map( match => `${match[1]}${match[3]}` )
                .toString()
                .replace( r_dollar,(m,g1,g2)=> {
        let amount = g1 * 0.92
        return `${amount}EUR`
    }).split(".")
      //  [match[1], match[3]] )


}

console.log(extractCurrency2(text));




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
//Array with phone separate
// const extractPhone = (text1) => {
//     let rp = /((\+373)?[ -])?(\d{1,3})[ -]?(\d{2,3})?[ -]?(\d{2,3})[ -]?(\d{2,3})[ -]?(\d{2,3})[ -]?/g

//     const phoneNumbers =  text1.match(rp)
//     return phoneNumbers 
// }
// console.log(extractPhone(text1))


//Array with separate emails
// const extractMail = (text1) => {
//     let rm = /[a-zA-Z0-9._\-]+[@][a-z]+\.[a-z]{2,3}/g

//     const emails =  text1.match(rm)
//     return emails 
// }
// console.log(extractMail(text1))




//array of object with email-phone per user
const extractInfo = (text1) => {
    let rp = /((\+373)?[ -])?(\d{1,3})[ -]?(\d{2,3})?[ -]?(\d{2,3})[ -]?(\d{2,3})[ -]?(\d{2,3})[ -]?/g
    let rm = /[a-zA-Z0-9._\-]+[@][a-z]+\.[a-z]{2,3}/g
    const phoneNumbers =  text1.match(rp)
    const emails =  text1.match(rm)
    return emails.map( (email,index) => {
        return {
            email:email,
            phone_number: phoneNumbers[index]
        }
    } )

    //return [phoneNumbers, emails] 
}

console.log(extractInfo(text1))



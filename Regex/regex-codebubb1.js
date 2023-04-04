const ex1 = 'The quick brown fox jumped over the lazy dog';
const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
const ex3 = 'The salad costs $9.99';
const ex4 = 'Contact customer support on 0800 300 500';
const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';


// Exercise 01
// Using a regex pattern, get the 3 letter words in the ex1 string.
ex1.match((^|\s)[a-zA-Z]{3}($|\s)/g);


// Exercise 02
// Using a regex pattern, remove all of the numbers from the ex2 string.
ex2.replace(/\d+/g, "")
ex2.replace(/[0-9]/g, "")


// Exercise 03
// Using a regex pattern, find the monetary value contained within the ex3 string.
ex3.match(/\$[0-9]+[.][0-9]+/g)
ex3.match(/\$\d\.\d\d/g)


// Exercise 04
// Using a regex pattern, find the telephone number contained within the ex4 string.
ex4.match(/[0-9]{4}[ ][0-9]{3}[ ][0-9]{3}/g)


// Exercise 05
// Using a regex pattern, find the email address contained within the ex5 string.
ex5.match(/\S+@\S+\.\S+/g)







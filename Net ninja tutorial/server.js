import http from 'http'
import fs from 'fs'
import _ from 'lodash'
//const _ = require('lodash')
                // acest cb va rula de fiecare data cind un request vine pe serverul creat de noi
const server = http.createServer((req, res)=>{
    
    //lodash
    const num = _.random(0, 20)
    console.log(num)

    const greet = _.once(() => {
        console.log('hello')
    } )

    greet()


    //set header content type. Noi spunem serverului ce tip de informatie vrem sa primim inapoi. in cazul nostru text
    res.setHeader('Content-Type', 'text/html' )

    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html'; 
            res.statusCode = 200;
            break;
        case '/about':
            path +='about.html'; 
            res.statusCode = 200;
            break;
            //redirectionam o pagina spre alta
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', './about')
            res.end()
            break;
        default:
            path += '404.html'; 
            res.statusCode = 404;
            break;
    }

    //send an html as a file
    fs.readFile(path, (err, data)=>{
        if (err){
            console.log(err)
            res.end()
        } else{
            //res.write(data)
            // daca noi trasmitem doar un obiect cu res.write, atunci o putem face ca in linia de mai jos.Daca trimitem mai multe rsp.write, atunci ca mai sus
            res.end(data)
        }

    })
    
    // Noi spunem serverului cind vine inapoi rsp sa afiseze acest continut  pe ecran
    // res.write('<head><link rel="styleseet" href="#" ></head>')
    // res.write('<p>Hello Ninjas</p>')
    // res.write('<p>Hello again Ninjas</p>')

    // inchidem  raspunsul
    //res.end()
})

// un server creat fara event listen nu poate face nimic, nu asteapta comenzi de la client
server.listen( 3000, 'localhost', ()=>{
    console.log('listening for requests on port 3000')
} )

//Localhost is like a domanin name on the web, like google.com
//Port numbers are like 'doors' into a computer

//CTRL+ C canceles the process
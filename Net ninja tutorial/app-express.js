import express from 'express'
// pentru a accesa dirname
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
//console.log(__filename)
const __dirname = path.dirname(__filename)
//console.log(__dirname)

//express app
const app = express()

//listen for requests
app.listen(3000)

app.get('/', (req,res)=>{
   
   //res.send('<p>Home page</p>')
   res.sendFile('./views/index.html', { root: __dirname})
   console.log(__dirname)
})

app.get('/about', (req,res)=>{
   
   
   res.sendFile('./views/about.html', { root: __dirname})
})

//redirect
app.get('/about-us', (req,res)=>{
   res.redirect('/about')
})

//404 error
// acesta functie va fi invocata la fiecare request si doar daca ajunge pina la calea respectiva se va executa
app.use((req,res)=>{
   res.sendFile('./views/404.html', { root: __dirname})
})
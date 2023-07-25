 import fs, { writeFile } from 'fs'
//reading files
//  fs.readFile('./docs/blog12.txt', (err, data) => {
//     if(err){
//         console.lof(err)
//     }
//     console.log(data)  //<Buffer 48 65 6c 6c 6f 20 43 6f 72 69 6e 61 21> buffer = package of data
//     console.log(data.toString() ) // .toString() converts the data buffered into string
//  } )

//  console.log('last line')

//writing files
//primeste 3 argumenti: calea catre fisierul pe care vrem sa-l modificam, textul ce vrem sa apara in fisir, si cb care va fi invocat
// fs.writeFile('./docs/blog1.txt', 'Hello again', () => {
//     console.log('file was written')
// })
// // daca mentionat un file care nu exista, aceasta metoda il va crea
// fs.writeFile('./docs/blog2.txt', 'Hello again', () => {
//     console.log('file was written')
// })

// directory

//daca folder assets nu exista , codul din linia 27 se va rula
if(!fs.existsSync('./assets') ){
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log('folder created')
    })

}else{
    fs.rmdir('./assets', (err)=>{
        if(err){
            console.log(err)
        }
        console.log('folder deleted')
    })
}


//deleting files
if(fs.existsSync('./docs/deleteme.txt') ){
    fs.unlink('./docs/deleteme.txt', (err)=>{
        if(err){
            console.log(err)
        }
        console.log('file deleted')
    })
    
}
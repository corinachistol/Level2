import fs from 'fs'
                //metoda sincrona care va bloca tot codul in jos pina la finalziarea functiei
                //primeste ca argumenti: fisierul de unde sa citeasca , encoding:utf8
//let readme = fs.readFileSync('readMe.txt', 'utf8')

//am copiat continul fisierului 'readMe' in 'writeMe'
//fs.writeFileSync('writeMe.txt', readme)

//metoda asincrona- nu va blca codul de mai jos si se va executa in orice moment
// fs.readFile('readMe.txt', 'utf8', function(err, data){
//     fs.writeFile('writeMe.txt', data, function(err,_data){})
// } )

console.log('test') // test se va afisa primul, pentru ca e asyncrona metoda de mai sus


//code

//CREATE -DELETE Directory

//delete a file
// fs.unlink('writeMe.txt',function(){
//     console.log('file deleted')
// })

//create a directory
//fs.mkdirSync('stuf2')

//delete directory
//fs.rmdirSync('stuf2')

//make directory - read the file -create a file
// fs.mkdir('stuf',function(){
//     fs.readFile('readMe.txt','utf8', function(err, data){
//         fs.writeFile('./stuf/writeMe.txt', data, function(err,_data){})
//     })
// })

fs.unlink('./stuf/writeMe.txt',function(){
        console.log('file deleted')
        fs.rmdir('stuf',function(){})
    })
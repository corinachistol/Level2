import fs from 'fs'

// acesta metoda primeste 2 argumenti: de unde vrem sa citim informatia si unde vrem sa punem informatia citita
const readStream = fs.createReadStream('./docs/blog3.txt', 'utf8')

const writeStream = fs.createWriteStream('./docs/blog4.txt')

//de fiecare data cind primim o bucata de info din blog3 o adaugam in blog4
// readStream.on('data', (chunk) => {
//     console.log('----NEW CHUNK-----')
//     console.log(chunk)
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk)

// })

//chunk.toString()  = 'utf8'


//piping
readStream.pipe(writeStream)

import {fs} from 'node:fs'

let readme = fs.readFilrSync('readme.txt', 'utf-8')
console.log(readme)

//code
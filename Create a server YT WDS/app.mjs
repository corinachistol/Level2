import http from 'node:http'
import fs from 'node:fs'

const port = 3000

const server = http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', (err,data)=> {
        if(err){
            res.writeHead(404)
            res.write('Error: File not found')
        }else{
            res.write(data)
        }
        res.end()
    })
    
} )

server.listen(port, (error)=>{
    if(error){
        console.log('Something went wrong', error)
    }else{
        console.log('Server is listening on port', port)
    }
})
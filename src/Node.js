const http = require('http')
const fs = require('fs')
const port = 3000


const server = createServer(function(req,res){
     res.writeHead(200,{'Content-type':'text/html'})
     fs.readFile('index.html',function(error,data){
        if(error){
            res.writeHead(202)
            res.write(data)
        }
        res.end()
     })
})


server.listen(port, function(error){
    if(error){
        console.log('Something went wrong',error)
    }else{
        console.log('Server is listening on port'+ port)
    }
})
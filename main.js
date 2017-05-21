const http = require('http')  
const port = 666

const requestHandler = (request, response) => {  
  console.log(request.url)
  response.end('Teste!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
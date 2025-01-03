const http = require("http")

const server = http.createServer((req, res) => { 
    const { method, statusCode, url } = req

    const sports = ['soccer', 'volei', 'basquete', 'tenis']

    if (url === '/') {
        res.write("<div><h1>Hello from node</h1><p>Http server</p></div>")
        res.end()
        return
    }
    
    if (url === '/api/esportes') {
        res.write(JSON.stringify(sports))
        res.end()
        return
    }
    
    res.statusCode = 404
    res.write("<h1>Página não encontrada</h1>")
    res.end()
})

const port = 3000

server.listen(port, 'localhost', () => {
    console.log(`Server rodando em http://localhost:${port}`)
})
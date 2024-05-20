const express = require('express')
const app = express()

const roupaRoute = require('./routes/roupaRoutes')
const lojaRoute = require('./routes/lojaRoutes')

const host = '127.0.0.1'
const port = 3333

app.use(express.json())
app.use('/roupas',roupaRoute)
app.use('/loja',lojaRoute)

app.use((err, req, res, next) => {
    console.log('Erro no Website')
    res.status(500)
    res.end(err.message)
})

app.use((req, res, next) => {
    res.status(404)
    res.send(`Erro 404, rota ${req.url} não encontrada`)
})

app.listen(port, host, () => {
    console.log(`Servidor criado em http://${host}:${port}`)
})
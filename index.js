import express, { urlencoded } from 'express'
import 'dotenv/config'
import musics from './data/musics.js'

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({extended : false}))


app.get('/', (request, response) => {
    response.send(`Welcome to my API`)
})

app.get('/musics', (request, response) => {
    response.json(musics)
})

// CRUD : Create / Read / Update / Delete
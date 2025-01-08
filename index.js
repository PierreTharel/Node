import express from 'express'
import 'dotenv/config'
import musicsRouter from './routes/musicsrouter.js'
import usersRouter from './routes/usersRouter.js'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use('/api', musicsRouter, usersRouter)


app.get('/', (request, response) => {
    response.send(`Welcome to my API`)
})

const mongoDB = process.env.MONGO_URI
mongoose.connect(mongoDB)

const db = mongoose.collection

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT} 🟢`))

// CRUD : Create / Read / Update / Delete
import express from 'express'
import 'dotenv/config'
import musicsRouter from './routes/musicsrouter.js'
import usersRouter from './routes/usersRouter.js'
import postsRouter from './routes/postsRouter.js'
import authRouter from './routes/authRouter.js'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api', musicsRouter, usersRouter, postsRouter, authRouter)

app.get('/', (request, response) => {
    response.send(`Welcome to my API`)
})


const mongoDB = process.env.MONGO_URI
mongoose.connect(mongoDB, {useNewUrlParser: true});

const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.listen(PORT, () => console.log(`Server is running on port ${PORT} 🟢`))
import {Router} from 'express'
import musics from '../data/musics.js'

const musicsRouter = Router()

musicsRouter.get('/musics', (request, response) => {
    response.json(musics)
})

musicsRouter.get('/musics/:id', (req, res) => {
    let {id} = req.params
    try{
        const musicByID = musics.find(music => music.id === parseInt(id))
        if(!musicByID){
            return res.status(403).json({message : 'Music not found'})
        }
        return res.status(200).json(musicByID)
    }
    catch(err){
        return res.status(500).json({ message : 'Internal server error'})
    }
})

musicsRouter.put('/musics/:id', (req, res) => {
    let {id} = req.params
    try{
        const musicByID = musics.find(music => music.id === parseInt(id))
        if(!musicByID){
            return res.status(403).json({message : 'Music not found'})
        }
        musicByID.name= name || musicByID.name
        musicByID.author = author || musicByID.author 
        musicByID.name= genre || musicByID.genre
    return res.status(200).json(musicByID)
}
catch(err){
    return res.status(500).json({ message : 'Internal server error'})
}
})


musicsRouter.post('/musics', (req, res) => {
    let {name, author, genre} = req.body
    try{
        if(!name || !author || !genre){
            return res.status(401).json({message : 'All fields are required'})
        }
        const newMusic = {
            id : musics.length + 1,
            name,
            author,
            genre
        }
        musics.push(newMusic)
        return res.status(201).json(musics)
    }
    catch(err){
        return res.status(500).json({ message : 'Internal server error'})
    }
})

musicsRouter.delete('/musics/:id', (req, res) => {
    let {id} = req.params
    try{
        const musicByID = musics.find(music => music.id === parseInt(id))
        if(!musicByID){
            return res.status(403).json({message : 'Music not found'})
        }
        const index = musics.indexOf(musicByID)
        const deletedMusic = musics.splice(indice, 1)
        if(deletedMusic){
            return res.status(403).json({message : `Music ${musicByID.name} has been delete`})
}
    }
    
catch(err){
    return res.status(500).json({ message : 'Internal server error'})
}
})

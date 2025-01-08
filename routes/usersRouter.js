import {Router} from 'express'
import { getAllUsers } from '../controllers/usersController.js'
import { getUserByID } from '../controllers/usersController.js'
import { createUser } from '../controllers/usersController.js'
const userRouter = Router()


userRouter.get('/users', getAllUsers, getUserByID, createUser)

userRouter.get('/users/:id', async (req, res) => {
    const {id} = req.params
    try{
        const userByID = await Users.findById(id)
        return res.status(200).json(userByID)
    }
    catch(err){
        return res.status(500).json({message : 'Internal server error'})
    }

})

userRouter.post('/users', async (req, res) => {
    const {first_name, last_name, passion} = req.body
    try{
        const newUser = await Users.create(req.body)
        return res.status(201).json(newUser)
    }   
    catch(err){
        return res.status(500).json({message : 'Internal server error'})
    }
})

userRouter.put('/users/:id', (req, res) => {
    let {id} = req.params
    let {first_name, last_name, passion} = req.body
    try{
        const UserByID = user.find(user => user.id === parseInt(id))
        if(!UserByID){
            return res.status(403).json({message : 'User not found'})
        }
        UserByID.first_name = first_name || UserByID.first_name
        UserByID.last_name = last_name || UserByID.last_name
        UserByID.passion = passion || UserByID.passion
        return res.status(201).json({message : `User ${UsersByID.first_name} has been updated`})
    }
    catch(err){
        return res.status(500).json({ message : 'Internal server error'})
    }
})

userRouter.delete('/users/:id', (req, res) => {
    let {id} = req.params
    try{
        const UsersByID = users.find(users => users.id === parseInt(id))
        if(!UsersByID){
            return res.status(403).json({message : 'Music not found'})
        }
        const index = users.indexOf(UsersByID)
        const deletedUsers = users.splice(index, 1)
        if(deletedUsers){
            return res.status(203).json({message : `Music ${UsersByID.name} has been deleted`})
        }
    }
    catch(err){
        return res.status(500).json({ message : 'Internal server error'})
    }
})



export default userRouter
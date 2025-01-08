import Users from '../models/Users.js'

export const getAllUsers = async (req, res) => {
    try{
        const users = await Users.find()
        if(users.length < 1){
            return res.status(400).json({message : 'Users not found'})
        }   
        return res.status(200).json(users)
    }
    catch(err){
        return res.status(500).json({message : 'Internal server error'})
    }
}

export const getUserByID = async (req, res) => {
    try{
        const users = await Users.findOne()
        if(users.length < 1){
            return res.status(400).json({message : 'Users not found'})
        }   
        return res.status(200).json(users)
    }
    catch(err){
        return res.status(500).json({message : 'Internal server error'})
    }
}

export const createUser = async (req, res) => {
    try{
        const users = await Users.create()
        if(users.length < 1){
            return res.status(400).json({message : 'Users not found'})
        }   
        return res.status(200).json(users)
    }
    catch(err){
        return res.status(500).json({message : 'Internal server error'})
    }
}
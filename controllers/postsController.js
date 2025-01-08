import Post from '../models/Posts.js'


export const getAllPosts = async (req, res) => {
    try{
        const posts = await Post.find().populate('userId')
        if(posts.length < 1){
            return res.json({message : 'Posts not found'})
        }
        return res.json(posts)
    }
    catch(err){
        return res.status(500).json({message : 'Internal server error'})
    }
}

export const getPostByID = async (req, res) => {
    const {id} = req.params
    try{
        const postByID = await Post.findById(id)
        return res.status(200).json(postByID)
    }
    catch(err){
        return res.status(500).json({message : 'Internal server error'})
    }

}

export const createPost = async (req, res) => {
    try{
        const newPost = await Post.create(req.body)
        return res.status(201).json(newPost)
    }
    catch(err){
        return res.status(500).json({message : 'Internal server error'})
    }
}

export const deletePost = async (req, res) => {
    const {id} = req.params
    try{
        const deletedPost = await Users.findByIdAndDelete(id)
        if(deletedPost){
            return res.status(203).json({message : 'Post has been deleted'})
        }
        return res.json({message : 'Posts not found'})

    }
    catch(err){
        console.log(err)
        return res.status(500).json({message : 'Internal server error'})
    }
}
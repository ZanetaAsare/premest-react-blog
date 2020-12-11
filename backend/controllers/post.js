const Post = require('../models/post')


//create a new blog post = POST
const createPost = async (req, res) => {
    const {title, author, content} = req.body
    const post = Post({title, author, content})

    try{
        const newPost = await post.save()

        res.send({
            message: 'Post Added Successfully', newPost
        })
    } catch (exception){
        res.status(500).send({error: 'There is an exception'})
    }
}
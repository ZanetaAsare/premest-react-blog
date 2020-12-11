import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';
import '../styles/blog.css';
import arrow from '../img/arrow.png'


function Home(){
    const [posts, setPosts] = useState([])
    const [upvote, setUpvote] = useState(0)
    const [downvote, setDownvote] = useState(0)

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((result) => {setPosts(result.data)})
        .catch((error) => {console.log(error)})
    })

    const handleUpvoteOnClick = () => {
        setUpvote(upvote + 1);
    }

    const handleDownvoteOnClick = () => {
        setDownvote(downvote + 1);
    }

    return(
        
        <div className='homepage'>
            <h1>My Personal Blog</h1>
            <br></br>
            <div className='blogs'>
            {
                posts.map((post) => (
                    <div className='blogpost' key={post.id}>
                        <h3 id='blogtitle'>{post.title}</h3>
                        <p id='pbody'>{post.body}{post.body}{post.body}</p>
                        
                        <div className='addInfo'>
                            <div className='blogInfo'>
                                <span>Author: Admin</span>
                                <span>Added on: 01/01/2020</span>
                            </div>
                            <div className='blogVotes'>
                                <span>{upvote}</span>
                                <img id='upvote' onClick={handleUpvoteOnClick} src={arrow} alt=''/>
                                <img id='downvote' onClick={handleDownvoteOnClick} src={arrow} alt=''/>
                                <span>{downvote}</span>
                            </div>
                        </div>
                        
                    </div>                    
                ))
            }
            </div>
        </div>
    )
}


export default Home;

// {/* <Link to='/login'><button>Click me</button></Link> */}
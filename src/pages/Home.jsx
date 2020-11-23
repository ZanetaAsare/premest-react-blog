import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


function Home(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((result) => {setPosts(result.data)})
        .catch((error) => {console.log(error)})
    })

    return(
        
        <div className='homepage'>
            <h1>Posts</h1>
            <br></br>
            <Link to='/detail-post'>
            {
                posts.map((post) => (
                    <div className='blogpost' key={post.id}>
                        <h3 id='blogtitle'>{post.title}</h3>
                        <p>{post.body}{post.body}{post.body}</p>
                    </div>                    
                ))
            }
            </Link>
        </div>
    )
}


export default Home;


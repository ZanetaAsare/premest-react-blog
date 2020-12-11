import React, {useState} from 'react';
import '../styles/Auth.css'

function AddPost(){
    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [date, setDate] = useState('')
    const [post, setPost] = useState({})

    const handleTitleOnChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubtitleOnChange = (e) => {
        setSubtitle(e.target.value)
    }

    const handleContentOnChange = (e) => {
        setContent(e.target.value)
    }

    const handleAuthorOnChange = (e) => {
        setAuthor(e.target.value)
    } 

    const handleDateOnChange = (e) => {
        setDate(e.target.value)
    }

    const handleFormOnSubmit = (e) => {
        e.preventDefault();
        post['title'] = title
        post['subtitle'] = subtitle
        post['content'] = content
        post['author'] = author
        post['date'] = date
    }

    // export post to home
    // redirect to home

    return(
        <div className='auth-container'>
            <h1>Add a Post</h1>

            <form className='auth'>
                <input type='text' placeholder='Post Title' value={title}/>
                <input type='text' placeholder='Subtitle' value={subtitle}/>
                <textarea placeholder='Content' rows="10" cols="30" value={content}></textarea>
                <input type='text' placeholder='Author' value={author}/>
                <input type='date' value={date}/>
                <button>Add Post</button>
            </form>
        </div>
    )
}

export default AddPost;


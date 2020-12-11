import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'


function Signup(){
    let history = useHistory();
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //form functions
    const handleFirstNameOnChange = (event) => {
        setFname(event.target.value)
    }

    const handleLastNameOnChange = (event) => {
        setLname(event.target.value)
    }

    const handleUsernameOnChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordOnChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSignupOnSubmit = (event) => {
        event.preventDefault();  //keeps page from reloading

        alert('Sign Up Successful')

        //Redirect to login
        history.push('/login')
    }
    
    return(
        <div className='auth-container'>
        
        <h1>Signup</h1>
        <form className='auth' onSubmit={handleSignupOnSubmit}>
            <input type='text' placeholder='First Name' value={fname} onChange={handleFirstNameOnChange}/>
            <input type='text' placeholder='Last Name' value={lname} onChange={handleLastNameOnChange}/>
            <input type='text' placeholder='Username' value={username} onChange={handleUsernameOnChange}/>
            <input type='password' placeholder='Password' value={password} onChange={handlePasswordOnChange}/>
            <button type='submit'>Sign Up</button>
        </form>
        </div>
    )
}

export default Signup;


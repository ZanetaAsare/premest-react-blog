import React, {useState} from 'react'; 
import '../styles/Auth.css' 
// import history from '../history'

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameOnChange = (event) => {
        setUsername(event.target.value)
    }
    
    const handlePasswordOnChange = (event) => {
        setPassword(event.target.value)
    }

    const handleOnSubmitLogin = (event) => {
        event.preventDefault();   //keeps page from reloading
        
        if (username === password) {
            localStorage.setItem('IsAuthenticated', 'true')  //creates an object to store data
            
            //Redirect to homepage
            // history.push('/')

            alert('Login Successful')
        } else{
            alert('Invalid Login')
        }
    }


    return(
        <div className='auth-container'>
            <h1>Login Page</h1>

            <form className='auth' onSubmit={handleOnSubmitLogin}>
                <input type='text' placeholder='Enter your email' value={username} onChange={handleUsernameOnChange}/>
               
                <input type='password' placeholder='Enter your password' value={password} onChange={handlePasswordOnChange}/>
               
                <button type='submit'>Login</button> 
            </form>
        </div>
    )
}

export default Login;


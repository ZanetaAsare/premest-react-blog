import './styles/App.css';
import {Switch, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login'
import Signup from './pages/Signup'
import AddPost from './pages/AddPost'
import DetailPost from './pages/DetailPost'
import UpdatePost from './pages/UpdatePost'
// import history from  './history'

function App() {
  return (
    <div>
        <nav>
            <ul>
              <Link to='/'><li>Home</li></Link>
              <Link to='/login'><li>Login</li></Link>
              <Link to='/signup'><li>Signup</li></Link>
            </ul>
        </nav>
        <Switch>
            <Route path={'/'} exact={true} component={Home} />
            <Route path={'/login'} component={Login} />
            <Route path={'/signup'} component={Signup} />
            <Route path={'/add-post'} component={AddPost}/>
            <Route path={'/detail-post'} component={DetailPost}/>
            <Route path={'/update-post'} component={UpdatePost} />
        </Switch>
        
    </div>
  );
}

export default App;
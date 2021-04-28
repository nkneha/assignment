import './App.css';
import Register from './components/Register';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './components/Login';
import Detials from './components/Detials';
import Category from './components/Category';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">

    
       <Router>
       <Switch>
         <Route exact path="/" component={Register}></Route>
         <Route path="/login" component={Login}></Route>
         <Route path="/details" component={Detials}></Route>
         <Route path="/category" component={Category}></Route>
         <Route path='/profile' component={Profile}></Route>
         </Switch>
       </Router>
     
    </div>
  );
}

export default App;

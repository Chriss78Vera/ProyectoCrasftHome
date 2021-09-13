import '../styles/App.css';
import InitialPage from './InitialPage/pageInitial'
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Shops from './Car/pagecar';
import SingUps from './InitialPage/SignUp';
import SingIns from './InitialPage/SignIn';
import { useStateValue } from  '../actions/StateProvider';
import { auth } from './firebase';
import { actionTypes } from '../actions/Reducer';
import {useEffect} from "react";

function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser);
      dispatch({
        type: actionTypes.SET_USER,
        user: authUser,
      })
    })
  },[])
  return (
    <Router>
      <div className="App">
    <Switch>
    <Route path="/Login">
        <SingIns/>
        </Route>
      <Route path="/Register">
        <SingUps/>
        </Route>
      <Route path="/shopcar">
         <Shops/>
      </Route>
      <Route path="/">
        <InitialPage/>
      </Route>
    </Switch>
    </div>
    </Router>
          
  );
}

export default App;

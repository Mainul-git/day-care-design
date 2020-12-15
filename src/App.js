import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import FrontHome from './components/FrontHome/FrontHome';
import SecondPageHome from './components/SecondPageHome/SecondPageHome';

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/home">
<FrontHome></FrontHome>
       </Route>
       <Route path="/booking/:userId">
<SecondPageHome></SecondPageHome>
       </Route>
       <Route path="/">
         <FrontHome></FrontHome>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;

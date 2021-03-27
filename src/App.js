import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./Components/1980/Nav";
import Body from "./Components/1980/Body"

function App() {
  return (
    <div className="App">
      <Router exact path="/">
        <Nav/>
        <Body/>
      </Router>
    </div>
  );
}

export default App;

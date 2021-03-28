import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//1980s
import Nav from "./Components/1980/Nav";
import Body from "./Components/1980/Body";
import Footer from "./Components/1980/Footer";

//2000s
import Nav2000 from "./Components/2000/Nav2000";
import Body2000 from "./Components/2000/Body2000";
import Footer2000 from "./Components/2000/Footer2000";

//2020
import Nav2020 from "./Components/2020/Nav2020";
import Banner2020 from "./Components/2020/Banner2020";
import About2020 from "./Components/2020/About2020";
import Trends from "./Components/2020/Trends";
import Footer2020 from "./Components/2020/Footer";
import Wrap from "./Components/2020/Wrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav />
            <Body />
            <Footer />
          </Route>
          <Route exact path="/2000">
            <Nav2000 />
            <Body2000 />
            <Footer2000 />
          </Route>
          <Route exact path="/2020">
            <Nav2020 />
            <div style={{ backgroundColor: "#062743" }} className="bg">
              <Banner2020 />
              <About2020 />
              <Trends />
              <Footer2020 />
              <Wrap />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

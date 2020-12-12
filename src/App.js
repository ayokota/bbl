import './App.scss';
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Redirect } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Banner from "./components/Banner/Banner";
import Team from "./components/Team/Team";
import Login from "./components/Login/Login";
import * as LoginService from "./services/LoginService.js";

function App() {
  let authenticated = LoginService.isLoggedIn();

  return (
    <div>
        <Router>
          <div>
            <Banner />
            <div className="body">
              <Route path={"/"} exact component={HomePage} />
              <Route path={"/about"} exact component={About} />
              <Route path={"/contact"} exact component={Contact} />
              <Route path={"/team"} exact component={Team} />
              <Route path={"/login"} exact component={Login} />
              {
                authenticated === false ? <Redirect to={"/login"} /> : null
              }
            </div>
            <Footer />
          </div>
        </Router>
    </div>
  );
}

export default App;

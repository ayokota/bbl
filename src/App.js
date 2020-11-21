import './App.css';
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div>
        <Router>
          <div>
            <Banner />
            <Route path={"/"} exact component={HomePage} />
            <Route path={"/about"} exact component={About} />
            <Route path={"/contact"} exact component={Contact} />
            <Footer />;
          </div>
        </Router>
    </div>
  );
}

export default App;

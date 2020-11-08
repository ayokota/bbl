import './App.css';
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div>
        <Router>
          <div>
            <Route path={"/"} exact component={HomePage} />
          </div>
        </Router>
    </div>
  );
}

export default App;

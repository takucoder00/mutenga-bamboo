import './App.tsx';
import Home from './pages/home/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './pages/contact/contact';




function App() {
  return (
    <Router>
       <Route exact path="/" component={Home} />
       <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;

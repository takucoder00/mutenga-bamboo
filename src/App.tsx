import './App.tsx';
import Home from './pages/home/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './pages/contact/contact';
import Shop from './pages/shop/shop';
import About from './pages/about/about';
import ScrollToTop from './components/scrollToTop';




function App() {
  return (
    
    <Router>
      <ScrollToTop>
       <Route exact path="/" component={Home} />
       <Route path="/contact" component={Contact} />
       <Route path="/shop" component={Shop} />
       <Route path="/about" component={About} />
       </ScrollToTop>
    </Router>
    
  );
}

export default App;

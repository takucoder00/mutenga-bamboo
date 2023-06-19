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
import Terms from './pages/terms/terms';
import Privacy from './pages/privacy/privacy';
import {useEffect} from 'react';
import axios from 'axios';
import SnackbarProvider from 'react-simple-snackbar'
import Celebrations from './pages/bamboo_celebrations/celebrations';
import Stories from './pages/stories/stories.js';

axios.defaults.withCredentials  = true;

function App() {

  useEffect(() => {

    document.title = "Mutenga Bamboo"
    
  
  })



  
  return (
    <SnackbarProvider>
      <Router>
        <ScrollToTop>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/shop" component={Shop} />
        <Route path="/about" component={About} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/celebrations" component={Celebrations} />
        <Route path="/stories" component={Stories} />
        </ScrollToTop>
      </Router>
      </SnackbarProvider>
    
    
  );
}

export default App;

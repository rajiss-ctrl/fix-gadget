import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from "./components/Footer/Footer.component";
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Contact from "./page/Contact.page";



function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Header/>
    <Switch >
      <Route exact path="/">
            <Home/>
      </Route>
       <Route  path="/Contact">
            <Contact/>
      </Route>
    </Switch>
    <Footer/>
    </Router>
    
    </>
  );
}
 

export default App;

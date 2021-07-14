import {BrowserRouter as Router,Route } from "react-router-dom"; 
import Techniques from "./Components/Techniques";
import Footer from "./Components/Footer";
import Gadget from "./Components/Gadgets";
import List from "./Components/List";
import "./App.css";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App"> 
     <Router>
         <Route exact path = "/" component ={Home} />
         <Route exact path = "/Techniques" component ={Techniques} />
         <Route exact path = "/store" component ={Gadget} />
         <Route exact path = "/Emergency Contacts" component ={List} />
         </Router>
      <Footer/>
     
    </div>
  );
}

export default App;

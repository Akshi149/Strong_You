import {BrowserRouter as Router,Route } from "react-router-dom"; 
import Techniques from "./Components/Techniques";
import Footer from "./Components/Footer";
import Gadget from "./Components/Gadgets";
import List from "./Components/List";
import "./App.css";
import Home from "./Components/Home";
import Tech1 from './Components/Tech1.js';
import Tech2 from './Components/Tech2.js';
import Tech3 from './Components/Tech3.js';
import Tech4 from './Components/Tech4.js';
import Tech5 from './Components/Tech5.js';
import Tech6 from './Components/Tech6.js';
import Tech7 from './Components/Tech7.js';
import Tech8 from './Components/Tech8.js';
import Report from './Components/Report.js';
function App() {
  return (
    <div className="App"> 
     <Router>
         <Route exact path = "/" component ={Home} />
         <Route exact path = "/Techniques" component ={Techniques} />
         <Route exact path = "/Tech1" component ={Tech1} />
         <Route exact path = "/Tech2" component ={Tech2} />
         <Route exact path = "/Tech3" component ={Tech3} />
         <Route exact path = "/Tech4" component ={Tech4} />
         <Route exact path = "/Tech5" component ={Tech5} />
         <Route exact path = "/Tech6" component ={Tech6} />
         <Route exact path = "/Tech7" component ={Tech7} />
         <Route exact path = "/Tech8" component ={Tech8} />
         <Route exact path = "/store" component ={Gadget} />
         <Route exact path = "/Emergency Contacts" component ={List} />
         <Route exact path = "/Report" component ={Report} />
         </Router>
      <Footer/>
     
    </div>
  );
}

export default App;

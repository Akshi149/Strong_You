import {BrowserRouter as Router,Route } from "react-router-dom"; 
import Footer from "./Components/Footer";
import "./App.css";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App"> 
     <Router>
         <Route exact path = "/" component ={Home} />
         {/* <Route exact path = "/Contactus" component ={Contact} /> */}
         </Router>
      <Footer/>
     
    </div>
  );
}

export default App;

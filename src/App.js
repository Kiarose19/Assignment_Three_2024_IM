import Home from "./pages/home";
import Design from "./pages/design";
import Theory from "./pages/theory";
import Art from "./pages/art";
import { Route, Link, Router, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Modal from 'react-modal';


Modal.setAppElement('#root');



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes baseName = "/Home_Assignment3_2024_Interactive-Media">
     <Route exact path = "/" Component = {Home}/>
     <Route  exact path = "/design" Component = {Design}/>
     <Route exact path = "/theory" Component = {Theory}/>
     <Route exact path = "/art" Component = {Art}/>
     </Routes>

   
    </div>
    



  );
}


export default App;

import { BrowserRouter as  Router,Route, Link,Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
    <div className="List">
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="About">About</Link></li>
    <li><Link to="Blogs">Blogs</Link></li>
  </ul>
  </div>
    <h2> Akshay Devkate 💻 🐐</h2>
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/About" element={<About />}/>
         <Route exact path="/Blogs" element={<Blogs />}/>
        </Routes>
   </Router>
</div>
);
}

export default App;

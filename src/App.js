<<<<<<< HEAD
import { BrowserRouter as  Router,Route, Link,Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";

=======
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Navbar from "./components/Navbar/Navbar";
>>>>>>> ed88b88c1aa2c4d28f4307e903c8f6c81be97a5e

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
     <Router>
    <div className="List">
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="About">About</Link></li>
    <li><Link to="Blogs">Blogs</Link></li>
  </ul>
  </div>
 
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/About" element={<About />}/>
         <Route exact path="/Blogs" element={<Blogs />}/>
        </Routes>




         </Router>


</div>

=======
    <Navbar />
      <header className="App-header">
       <h2> Akshay Devkate 💻 🐐</h2>
       <h3>Travel, Tech, Business, Analytics</h3>
          <Header />
       </header>
  
     </div>
>>>>>>> ed88b88c1aa2c4d28f4307e903c8f6c81be97a5e
  );
}

export default App;

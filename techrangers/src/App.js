import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Navbar from "./components/navbar/Navbar"; 
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer"; 
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;

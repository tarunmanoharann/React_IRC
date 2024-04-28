import Home from "./Components/Home";
import Card from "./Components/Card";
import Footer from "./Components/footer";
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;

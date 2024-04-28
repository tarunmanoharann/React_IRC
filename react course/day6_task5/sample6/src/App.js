import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from './pages/Home'

function App() {
  return (
    <>
    <Nav/>
    <div className="App">
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Home" element={<Nav/>}></Route>
      </Routes>
    </div>

    </>
  
  );
}

export default App;

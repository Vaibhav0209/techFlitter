import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import AddFleets from "./pages/AddFleets.jsx";
import NotFound from "./pages/NotFound.jsx";
import EditFleet from "./pages/EditFleet.jsx";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-fleets" element={<AddFleets />}></Route>
        <Route path="/edit-fleet" element={<EditFleet />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FormPage } from "./pages/FormPage/FormPage";
import Homepage from "./pages/HomePage/HomePage";
import { TablePage } from "./pages/TablePage/TablePage";
import { Navbar } from "./components/Layout";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/FormPage" element={<FormPage />} />
        <Route path="/TablePage" element={<TablePage />} />
      </Routes>
    </div>
  );
}

export default App;

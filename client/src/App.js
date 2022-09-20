import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FormPage } from "./pages/FormPage/FormPage";
import Homepage from "./pages/HomePage/HomePage";
import { TablePage } from "./pages/TablePage/TablePage";
import { Navbar } from "./components/Layout";
import { useEffect, useState } from "react";
function App() {
  const [dd, setdd] = useState(null);
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((dd) => setdd(dd.message));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/FormPage" element={<FormPage />} />
        <Route path="/TablePage" element={<TablePage />} />
      </Routes>
      <p>{!dd ? "hello world" : dd}</p>
    </div>
  );
}

export default App;

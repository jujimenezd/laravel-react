import "./App.css";
import { Routes, Route } from "react-router-dom";
import Table from "./Table";
import EditBook from "./EditBook";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Table />} />
      <Route path="/editar/:id" element={<EditBook />} />
    </Routes>
  );
}

export default App;

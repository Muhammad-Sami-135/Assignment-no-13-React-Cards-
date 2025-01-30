import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Product } from "./Product/Product";
import { SinglepageData } from "./Single page data/SinglepageData";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "45px" }}>
        Products
      </h1>
      <Routes>
        <Route index element={<Product />} />
        <Route path="/SinglepageData/:id" element={<SinglepageData />} />
      </Routes>
    </>
  );
}

export default App;

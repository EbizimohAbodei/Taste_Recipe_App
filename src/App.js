import "./index.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Recipes from "./components/Recipes";
import AddRecipe from "./components/AddRecipe";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="recipes" element={<Recipes />} />
        <Route path="addrecipe" element={<AddRecipe />} />
        <Route path="contact" element={<Contact />} />
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

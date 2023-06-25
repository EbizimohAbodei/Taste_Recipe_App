import "./index.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Recipes from "./components/Recipes/Recipes";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home";
import About from "./components/About/About";
import SingleRecipe from "./components/SingleRecipe/SingleRecipe";
import { useParams } from "react-router-dom";

const RouterWrapper = (props) => {
  const params = useParams();
  return <SingleRecipe params={params} {...props} />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="recipes" element={<Recipes />} />
        <Route path="addrecipe" element={<AddRecipe />} />
        <Route path="recipes/:singlerecipe" element={<RouterWrapper />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import OneProductPage from "./pages/OneProductPage";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Contact />} // Ensure the prop is passed directly here
        />
        <Route path="categories" element={<Categories />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="one-product-page" element={<OneProductPage />} />
      </Routes>
    </>
  );
}

export default App;

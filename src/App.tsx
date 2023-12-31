import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import OneProductPage from "./pages/OneProductPage";
import Login from "./pages/Login";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart";
import { RecoilRoot } from "recoil";
import Checkout from "./pages/Checkout";
// import BookDetails from "./pages/BookDetails";
// import BlogDetails from "./pages/BlogDetails";
import Registration from "./pages/Registration";
import Footer from "./components/footer/Footer";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <RecoilRoot>
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signIn" element={<Login />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/:id" element={<OneProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* <Route path="/bookDetails" element={<BookDetails />} /> */}
            {/* <Route path="/blogDetails" element={<BlogDetails />} /> */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
      </RecoilRoot>
    </>
  );
}
export default App;

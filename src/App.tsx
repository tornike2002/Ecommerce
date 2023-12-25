import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import OneProductPage from "./pages/OneProductPage";
import Login from "./pages/Login";
import Header from "./components/Header/Header";
import styled from "styled-components";
import Faq from "./pages/Faq";
import TrackOrder from "./pages/TrackOrder";
import Cart from "./pages/Cart";
import { RecoilRoot } from "recoil";
import Checkout from "./pages/Checkout";
import BookDetails from "./pages/BookDetails";
import BlogDetails from "./pages/BlogDetails";
import Element from "./pages/Element";
import Registration from "./pages/Registration";
import Footer from "./components/footer/Footer";
import ErrorPage from "./pages/ErrorPage";

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <RecoilRoot>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/trackOrder" element={<TrackOrder />} />
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
            <Route path="/bookDetails" element={<BookDetails />} />
            <Route path="/blogDetails" element={<BlogDetails />} />
            <Route path="/element" element={<Element />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Container>
      </RecoilRoot>
    </>
  );
}
export default App;

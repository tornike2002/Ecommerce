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

const Container = styled.div`
  padding-left: 270px;
  padding-right: 270px;
`;

function App() {
  return (
    <>
      <RecoilRoot>
        <Container>
          <Header />
          <Routes>
            <Route path="faq" element={<Faq />} />
            <Route path="trackOrder" element={<TrackOrder />} />
            <Route path="signIn" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="categories" element={<Categories />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path=":id" element={<OneProductPage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="bookDetails" element={<BookDetails />} />
            <Route path="blogDetails" element={<BlogDetails />} />
            <Route path="element" element={<Element />} />
          </Routes>
        </Container>
      </RecoilRoot>
    </>
  );
}

export default App;

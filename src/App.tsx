import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import OneProductPage from "./pages/OneProductPage";
import Login from "./pages/Login";
import Header from "./components/Header/Header";
import styled from 'styled-components';
import Faq from "./pages/Faq";
import TrackOrder from "./pages/TrackOrder";

const Container = styled.div`
  padding-left: 270px;
  padding-right: 270px;

`;

function App() {
  return (
    <>
      <Container>
        <Header />
        <Routes>
          <Route path="faq" element={<Faq />} />
          <Route path="trackOrder" element={<TrackOrder />} />
          <Route path="signIn" element={<Login />} />


          <Route
            path="/"
            element={<Home />} // Ensure the prop is passed directly here
          />
          <Route path="categories" element={<Categories />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="one-product-page" element={<OneProductPage />} />

        </Routes>
      </Container>
    </>
  );
}

export default App;

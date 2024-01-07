import styled from "styled-components";
import CheckoutPage from "../components/checkoutForm/CheckoutPage";
import { Container } from "../components/styledComponents/containers";

const Checkout = () => {
  return (
    <CheckoutBgContainer>
      <Container>
        <CheckoutPage />
      </Container>
    </CheckoutBgContainer>
  );
};

export default Checkout;

const CheckoutBgContainer = styled.div`
  background-color: #F2F2F2;
`

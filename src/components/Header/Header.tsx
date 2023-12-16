// import React from 'react'
import styled from 'styled-components';
import Logo from '../../../public/logo.jpg';
import LogoOfShop from '../../../public/shopping-cart-outline-svgrepo-com.svg'
import { Link } from "react-router-dom";


const ResetButton = styled.button`
  /* Resetting default styles */
  appearance: none;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: none; 
  color: black;
  background-color: none;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    color: #dc3545; 
  }

  
`;

const CartImage = styled.img`
  width: 45px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1); 
  }
`;


const SignInButton = styled(ResetButton)`
  color: white; /* Text color for "Sign in" button */


  &:hover {
    color: white; 
  }
`;




export default function Header() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Link to='/'>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img src={Logo} alt='logo' style={{ width: '95px' }} />
          <h1>ABC Book</h1>
        </div>
      </Link>

      <input placeholder='Search your book'
        style={{
          marginLeft: '50px',
          width: '500px',
          height: '50px',
          borderRadius: '20px',
          paddingLeft: '20px',
          borderColor: 'gray'
        }}></input>

      <div style={{ marginLeft: '200px', display: 'flex', gap: '20px' }} >
        <Link to='/faq'>
          <ResetButton >
            FAQ
          </ResetButton>
        </Link>
        <Link to='/trackOrder'>
          <ResetButton>
            Track Order
          </ResetButton>
        </Link>

        <Link to='/cart'>
          <CartImage src={LogoOfShop} alt='shop' style={{ width: '45px' }} />
        </Link>

        <Link to='/signIn'>
          <div style={{ width: '80px', backgroundColor: 'red', borderRadius: '20px', }}>
            <SignInButton>
              Sign in
            </SignInButton>
          </div>
        </Link>
      </div>
    </div>
  )
}

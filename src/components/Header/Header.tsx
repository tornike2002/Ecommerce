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

      <div >
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
          <img src={LogoOfShop} alt='shop' style={{ width: '45px' }} />
        </Link>

        <Link to='/signIn'>
          <ResetButton>
            Sign in
          </ResetButton>
        </Link>
      </div>
    </div>
  )
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import { FormsHeader } from "../styledComponents/texts";
import { InputFieldsWrapper } from "../styledComponents/InputFields";
import { Link } from "react-router-dom";
const RegistrationPage = () => {
  return (
    <RegistrationMainDiv>
      <RegistrationDivWrapper>
        <FormsHeader>
          <h1>Sign Up</h1>
          <h2>Create your account to get full access</h2>
        </FormsHeader>
        {/* registration header */}
        <RegistrationInputsWrapper>
          <InputFieldsWrapper>
            <label htmlFor="fname">Full Name</label>
            <input type="text" id="fname" placeholder="Full Name..." />
          </InputFieldsWrapper>
          <InputFieldsWrapper>
            <label htmlFor="email">Email Address</label>
            <input type="text" id="email" placeholder="Email Address..." />
          </InputFieldsWrapper>
          <InputFieldsWrapper>
            <label htmlFor="password">Password</label>
            <input type="text" id="password" placeholder="Password..." />
          </InputFieldsWrapper>
          <InputFieldsWrapper>
            <label htmlFor="cpassword">Confirm Password</label>
            <input type="text" id="cpassword" placeholder="Confirm Password..." />
          </InputFieldsWrapper>
        </RegistrationInputsWrapper>
        {/* registration */}
         <RegistrationButtonWrapper>
            <p>Already have an account? <Link to="/login"><span>Login</span></Link> here</p>
            <button>Register</button>
          </RegistrationButtonWrapper>
      </RegistrationDivWrapper>
    </RegistrationMainDiv>
  );
};

export default RegistrationPage;
const RegistrationMainDiv = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
`;
const RegistrationDivWrapper = styled.div`
  background: #fff;
  padding: 55px 60px 50px 50px;
  box-shadow: 0px 10px 30px 0px rgba(13, 12, 13, 0.2);
  width: 100%;
  max-width: 700px;
`;

const RegistrationInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-wrap: wrap;
  font-family: "Roboto", sans-serif;
`;

const RegistrationButtonWrapper = styled.div`
      display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 90px;
  font-family: "Roboto", sans-serif;
  & p {
    color: var(--lightBrown);
    font-size: 16px;
    font-weight: 300;
    line-height: 1.6;
  }
  & p span {
    color: #ff1616;
    cursor: pointer;
  }
  & button {
    background: #FF1616;
    height: 60px;
    padding: 10px 43px;
    border: 0;
    color: #fff;
    text-transform: capitalize;
    cursor: pointer;
    font-size: 16px;
    border-radius: 0px;
  }
`

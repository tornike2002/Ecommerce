import { FC, Fragment } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormErrorMessage } from "../components/styledComponents/texts";

type FormData = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }).refine(data => data.trim() !== '', { message: 'Email is required' }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }).refine(data => data.trim() !== '', { message: 'Password is required' }),
});

const Login: FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const refresh = () => window.location.reload();

  const handleLogin = (data: FormData) => {
    // Retrieve registration data from local storage
    const storedData = localStorage.getItem("registrationData");

    if (storedData) {
      const registrationData: FormData = JSON.parse(storedData);

      console.log("Stored Registration Data:", registrationData);
      console.log("Entered Login Data:", data);

      const trimmedPassword = data.password.trim();
      if (
        data.email.trim() === registrationData.email.trim() &&
        trimmedPassword === registrationData.password.trim()
      ) {
        // Redirect to the home page
        navigate("/");
        refresh()
      } else {
        setError("password", {
          type: "manual",
          message: "Incorrect email or password",
        });
      }
    } else {
      setError("email", {
        type: "manual",
        message: "No registration data found",
      });
    }
  };

  return (
    <Fragment>
      <LoginMainDiv>
        <LoginWrapper>
          <LoginTitle>
            <h1>Login</h1>
            <h2>Enter Login details to get access</h2>
          </LoginTitle>
          <form onSubmit={handleSubmit(handleLogin)}>
            <LoginInputsWrapper>
              <LoginInputsContainer>
                <label htmlFor="email">Email Address</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email Address..."
                  {...register("email")}
                />
                {errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
              </LoginInputsContainer>
              <LoginInputsContainer>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password..."
                  {...register("password")}
                />
                {errors.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
              </LoginInputsContainer>
            </LoginInputsWrapper>
            <CheckboxForgotWrapper>
              <span>
                <input type="checkbox" />
                <h3>Keep Me Logged In</h3>
              </span>
              <h2>Forgot Password?</h2>
            </CheckboxForgotWrapper>
            <SignLoginWrapper>
              <p>
                Don’t have an account?{" "}
                <Link to="/register">
                  <span>Sign Up</span>
                </Link>{" "}
                here
              </p>
              <button type="submit">Login</button>
            </SignLoginWrapper>
          </form>
        </LoginWrapper>
      </LoginMainDiv>
    </Fragment>
  );
};

export default Login;

const LoginMainDiv = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
`;
const LoginWrapper = styled.div`
  background: #fff;
  padding: 55px 60px 50px 50px;
  box-shadow: 0px 10px 30px 0px rgba(13, 12, 13, 0.2);
  width: 100%;
  max-width: 700px;
`;
const LoginTitle = styled.div`
  text-align: center;
  color: var(--mediumBlue);
  & h1 {
    font-size: 30px;
    font-weight: 600;
    text-transform: capitalize;
    padding-bottom: 16px;
  }
  & h2 {
    color: var(--lightBrown);
    font-size: 16px;
    margin-bottom: 15px;
    font-weight: 300;
    line-height: 1.6;
    padding-bottom: 20px;
  }
`;
const LoginInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-wrap: wrap;
  font-family: "Roboto", sans-serif;
`;
const LoginInputsContainer = styled.div`
  display: flex;
  flex-direction: column;

  & label {
    display: block;
    font-size: 17px;
    margin-bottom: 6px;
    color: var(--mediumBlue);
    text-transform: capitalize;
    font-weight: 600;
    text-align: left;
  }
  & input {
    width: 100%;
    max-width: 100%;
    height: 50px;
    margin-bottom: 20px;
    padding: 0 25px;
    color: #000;
  }
  & input:focus {
    outline: none;
    font-size: 16px;
  }
`;
const CheckboxForgotWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto", sans-serif;
  & h2 {
    font-size: 14px;
    font-weight: 400;
    color: #ff1616;
    cursor: pointer;
  }
  & span {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  & span h3 {
    display: block;
    font-size: 17px;
    margin-bottom: 6px;
    color: var(--mediumBlue);
    text-transform: capitalize;
    font-weight: 600;
    text-align: left;
    padding-top: 8px;
  }
  & span input {
    width: 19px;
    height: 19px;
  }
  & span input[type="checkbox"] {
    accent-color: red;
  }
`;
const SignLoginWrapper = styled.div`
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
    background: #ff1616;
    height: 60px;
    padding: 10px 43px;
    border: 0;
    color: #fff;
    text-transform: capitalize;
    cursor: pointer;
    font-size: 16px;
    border-radius: 0px;
  }
`;

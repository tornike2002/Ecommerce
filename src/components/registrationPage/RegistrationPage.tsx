/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import { FormsHeader} from "../styledComponents/texts";
import { FormErrorMessage } from "../styledComponents/InputFields";
import { InputFieldsWrapper } from "../styledComponents/InputFields";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useNavigate } from "react-router-dom";
type FormData = {
  fullname: string;
  email: string;
  password: string;
  cpassword: string;
};
const RegistrationPage = () => {
  const navigate = useNavigate()
  const schema = z
    .object({
      fullname: z
        .string()
        .min(5)
        .max(15)
        .refine((value: string) => value.trim() !== "", {
          message: "Full Name is required",
        }),
      email: z
        .string()
        .email()
        .refine((value: string) => value.trim() !== "", {
          message: "Email is required",
        }),
      password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .refine((value: string) => value.trim() !== "", {
          message: "Password is required",
        }),
      cpassword: z.string().min(8, {
        message: "Confirm Password must be at least 8 characters long",
      }),
    })
    .refine(
      (data: { cpassword: string; password: string }) =>
        data.cpassword === data.password,
      {
        message: "Passwords do not match",
      }
    );

  const { register, handleSubmit, formState } = useForm<FormData>({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      cpassword: "",
    },
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  const onSubmit = (data: FormData) => {
    console.log("form submitted", data);
    localStorage.setItem("registrationData", JSON.stringify(data));

    navigate("/login");
  };


  return (
    <RegistrationMainDiv>
      <RegistrationDivWrapper>
        <FormsHeader>
          <h1>Sign Up</h1>
          <h2>Create your account to get full access</h2>
        </FormsHeader>

        <RegistrationInputsWrapper onSubmit={handleSubmit(onSubmit)} noValidate>
          <InputFieldsWrapper>
            <label htmlFor="fname">Full Name</label>
            <input
              type="text"
              id="fname"
              placeholder="Full Name..."
              {...register("fullname")}
            />
            <FormErrorMessage>{errors.fullname?.message}</FormErrorMessage>
          </InputFieldsWrapper>

          <InputFieldsWrapper>
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              placeholder="Email Address..."
              {...register("email")}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </InputFieldsWrapper>

          <InputFieldsWrapper>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password..."
              {...register("password")}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </InputFieldsWrapper>

          <InputFieldsWrapper>
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              type="password"
              id="cpassword"
              placeholder="Confirm Password..."
              {...register("cpassword")}
            />
            <FormErrorMessage>{errors.cpassword?.message}</FormErrorMessage>
          </InputFieldsWrapper>
          <RegistrationButtonWrapper>
            <p>
              Already have an account?
              <Link to="/login">
                <span> Login </span>
              </Link>
              here
            </p>
            <button type="submit">
              Register
            </button>
          </RegistrationButtonWrapper>
        </RegistrationInputsWrapper>
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

const RegistrationInputsWrapper = styled.form`
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

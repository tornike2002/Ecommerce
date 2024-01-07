import styled from "styled-components";
import ban3 from "../../assets/homeBanner/ban3.jpg.webp";
import { Button, message } from "antd";
import { useState } from "react";

const HomeLetter = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [letter, setLetter] = useState("");
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Thanks for Subcribing to our newsletter",
      className: "custom-class",
      style: {
        marginTop: "20vh",
      },
    });
    setLetter("");
  };

  const letterInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLetter(event.target.value);
  };
  return (
    <HomeLetterMainContainer>
      <LetterContentWrapper>
        <h1>Join Newsletter</h1>
        <p>
          Lorem started its journey with cast iron (CI) products in 1980. The
          initial main objective was to ensure pure water and affordable
          irrigation.
        </p>
        <LetterMainWrapper>
          <input
            type="email"
            placeholder="Enter Your Email"
            onChange={letterInputHandler}
            value={letter}
          />
          {contextHolder}
          <Button
            style={{
              background: "#FF1616",
              borderRadius: "25px",
              color: "#fff",
              height: "50px",
              fontSize: "15px",
            }}
            onClick={success}
          >
            Subscribe
          </Button>
        </LetterMainWrapper>
      </LetterContentWrapper>
    </HomeLetterMainContainer>
  );
};

export default HomeLetter;

const HomeLetterMainContainer = styled.div`
  width: 100%;
  min-height: 351px;
  background: url(${ban3});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;
const LetterContentWrapper = styled.div`
  font-family: "Playfair Display", serif;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  p {
    max-width: 60%;
    color: #9498a7;
    font-size: 16px;
    margin-bottom: 21px;
    text-align: center;
  }
  h1 {
    font-size: 40px;
    display: block;
    font-weight: 400;
    line-height: 1.4;
    margin-bottom: 22px;
    color: #fff;
  }
`;
const LetterMainWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: center;
  input {
    width: 60%;
    height: 50px;
    padding: 15px 24px;
    color: #232f55;
    font-size: 16px;
    border-radius: 25px;
    background: #fff;
    border: 0;
  }
  @media screen and (max-width: 340px) {
    flex-direction: column;
  }
`;

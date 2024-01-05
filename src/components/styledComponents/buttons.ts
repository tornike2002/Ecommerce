import styled from "styled-components";

export const MainButton = styled.button<{ $bgColor?: "white" }>`
  padding: 15px 34px;
  cursor: pointer;
  border: 0;
  font-size: 16px;
  font-weight: 600;
  border-radius: 35px;
  color: ${(props) => (props.$bgColor === "white" ? "#222222;" : "#fff")};
  background: ${(props) => (props.$bgColor === "white" ? "#fff" : "#ff1616")};
`;

export const SecondButton = styled.button`
  color: #454e6d;
  font-size: 16px;
  font-weight: 400;
  padding: 7px 24px;
  margin-right: 8px;
  border: 1px solid #eee1e0;
  border-radius: 20px;
`;

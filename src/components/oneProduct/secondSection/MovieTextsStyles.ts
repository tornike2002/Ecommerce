import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 5%;
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
  @media screen and (max-width: 460px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledButton = styled.button`
  color: #454e6d;
  background-color: inherit;
  font-size: 16px;
  font-weight: 400;
  padding: 10px 24px;
  margin-right: 8px;
  border: 1px solid #eee1e0;
  border-radius: 20px;
  cursor: pointer;
`;

export const TextContainer = styled.div`
  margin-top: 50px;
  height: 300px;
  p {
    color: #301a22;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.6;
  }
  @media (max-width: 1152px) {
    height: 450px;
  }
`;

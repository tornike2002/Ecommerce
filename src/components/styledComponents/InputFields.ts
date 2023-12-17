import styled from "styled-components";

export const InputFields = styled.div`
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
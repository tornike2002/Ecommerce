import styled from "styled-components";

export const MblCont = styled.div`
  background-color: #4c4c4c;
  color: #fff;
  text-align: right;
  height: 60px;
  display: flex;
  justify-content: right;
  align-items: center;
  position: relative;
  @media (min-width: 1024px) {
    display: none;
  }
  a {
    color: inherit;
  }
`;

export const MenuCont = styled.span`
  border-radius: 4px;
  background-color: #222;
  padding: 3px 10px;
  margin-right: 20px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-weight: 700;
  text-shadow: 0 1px 3px #000;
  img {
    margin-top: 5px;
  }
`;

export const StyledUL = styled.ul`
  z-index: 10;
  left: 0;
  position: absolute;
  top: 59px;
  width: 100%;
  background-color: #4c4c4c;
  color: #fff;
  display: flex;
  text-align: left;
  flex-direction: column;
  padding: 7px 0 7px 20px;
  li {
    padding: 10px;
  }
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 20px;
  gap: 15px;
`;

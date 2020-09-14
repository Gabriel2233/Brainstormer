import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: var(--main-white);
  border: 0;
  border-radius: 8px;
  box-shadow: 0px 4px 8px 0px var(--shadow);

  > h1 {
    text-align: center;
    font: 600 2.5rem Inter;
    margin: 16px 8px 24px 8px;
  }
`;

export const LikeButton = styled.button`
  padding: 6px;
  background: transparent;
  border: 0;
  border-radius: 16px;
  margin: 4px 16px;
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: flex-end;
  cursor: pointer;

  > p {
    font: 500 1.4rem Inter;
    padding: 0 4px;
    color: var(--secondary-black);
  }

  &:hover {
    background: #fff00022;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  border-top: 2px solid var(--light-gray);

  > p {
    text-align: start;
    padding: 8px;
    font: 500 1.1rem Inter;
    color: var(--secondary-black);
  }
`;

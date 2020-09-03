import styled from "styled-components";

export const Card = styled.div`
  height: 250px;
  width: 215px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--secondary-white);
  transition: 0.1s linear;
  cursor: pointer;
  border: 0;
  border-radius: 8px;
  margin: 0 48px;
  padding: 8px;

  #icon {
    margin: 16px 0;
  }

  > h3,
  p {
    text-align: center;
  }

  > h3 {
    text-align: center;
    font: 600 2.4rem Inter;
  }

  > p {
    font: 500 1.8rem Inter;
    padding: 16px;
    color: var(--secondary-black);
  }

  &:hover {
    transform: translateY(-8px);
    background: var(--shadow-salmon);
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid var(--light-gray);
  border-radius: 8px;
`;

export const UserDateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;

  > p {
    font: 600 1.2rem Inter;
    color: var(--main-black);
  }

  > span {
    font: 600 1rem Inter;
    color: var(--main-black);
  }
`;

export const MainWrapper = styled.div`
  padding: 24px 0;

  > h3 {
    font: 700 2.4rem Inter;
    text-align: center;
  }
`;

export const ColaborateButton = styled.button`
  padding: 6px 8px;
  background: var(--main-white);
  border: 2px solid var(--main-salmon);
  color: var(--main-salmon);
  border-radius: 16px;
  cursor: pointer;
  font: 700 1.2rem Inter;
  display: flex;
  align-self: flex-end;
  margin: 4px;
  transition: 0.1s linear;

  &:hover {
    background: var(--light-gray);
  }
`;

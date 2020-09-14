import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  background: var(--brainstorm-bg);

  div:first-child {
    cursor: pointer;
    display: flex;
    align-self: flex-start;
    margin: 24;
  }
`;

export const CreateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  box-shadow: 0px 0px 15px var(--shadow);
  border: 0;
  border-radius: 10px;
  background: var(--main-white);

  margin: 36px;
  padding: 12px;
  height: 500px;
  width: 500px;

  > h1 {
    font: 700 3rem Inter;
  }
`;

export const Group = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 24px;
`;

export const IdeaInput = styled.input`
  width: 80%;
  padding: 24px 12px;
  border: 2px solid var(--light-gray);
  border-radius: 8px;
  margin: 16px;
  font: 500 1.5rem Inter;
`;

export const CreateButton = styled.button`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--main-salmon);
  color: var(--main-white);
  padding: 24px 112px;
  border: 0;
  border-radius: 8px;
  margin: 16px;
  font: 600 2.2rem Inter;
  cursor: pointer;
  transition: 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
`;

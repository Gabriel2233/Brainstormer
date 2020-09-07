import styled from "styled-components";

export const Container = styled.div``;

export const FlexContainer = styled.div`
  width: 100%;
  max-width: 1260px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  align-content: center;
  justify-content: center;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > h4 {
    font: 800 4rem Inter;
    margin: 10px;
    padding: 24px;
  }

  > p {
    font: 600 1.5rem Inter;
    color: var(--secondary-black);
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

  margin: 36px;
  padding: 12px;
  height: 500px;
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
  display: block;
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

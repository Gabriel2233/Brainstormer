import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: var(--light-black);
  position: fixed;
  top: 0;
  z-index: 555;
`;

export const Wrapper = styled.div`
  background: var(--main-white);
  border: 0;
  border-radius: 8px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Input = styled.textarea`
  height: 275px;
  width: 450px;
  margin: 36px;
  padding: 24px;
  resize: none;
  box-shadow: 0px 4px 14px 0px var(--shadow);

  border: 0;
  border-radius: 16px;
  font: 600 4.5rem Inter;
`;

export const CreateButton = styled.button`
  padding: 12px;
  background: var(--main-salmon);
  color: var(--main-white);
  font: 600 2rem Inter;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  margin: 16px;

  &::placeholder {
    color: var(-secondary-black);
  }
`;

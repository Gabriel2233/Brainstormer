import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  z-index: 999;

  background: var(--light-black);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  padding: 12px;
  background: var(--main-white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 0;
  border-radius: 8px;
`;

export const LoginForm = styled.div`
  padding: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Heading = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > h2 {
    font: 700 5rem Inter;
    padding: 18px 0;
    color: var(--main-black);
  }
`;

export const EmailInput = styled.input`
  width: 90%;
  padding: 20px 16px;
  background: var(--light-gray);
  border: 0;
  border-radius: 4px;
  margin: 20px 0;

  font: 500 2rem Inter;
`;

export const SubmitButton = styled.button`
  display: block;
  width: 90%;
  padding: 20px 16px;
  border: 0;
  border-radius: 4px;

  margin: 12px 0 24px 0;
  background: var(--main-salmon);
  color: var(--main-white);
  border: 0;
  border-radius: 4px;
  font: 600 2rem Inter;
  cursor: pointer;
`;

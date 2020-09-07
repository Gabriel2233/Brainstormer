import styled from "styled-components";

interface SubmitProps {
  cursorType: string;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--main-white);

  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 50%;
  padding: 20px 16px;
  background: var(--main-white);
  border: 2px solid var(--light-gray);
  border-radius: 4px;
  margin: 20px 0;

  font: 500 2rem Inter;
`;

export const SubmitButton = styled.button`
  display: block;
  width: 50%;
  padding: 20px 16px;
  border: 0;
  border-radius: 4px;

  margin: 12px 0 24px 0;
  background: var(--main-salmon);
  color: var(--main-white);
  border: 0;
  border-radius: 4px;
  font: 600 2rem Inter;
  cursor: ${(props: SubmitProps) => props.cursorType};
`;

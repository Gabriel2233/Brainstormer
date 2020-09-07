import styled from "styled-components";

export const Container = styled.div`
  background: var(--main-white);
  box-shadow: 0px 0px 15px var(--shadow);
  border: 0;
  border-radius: 8px;

  position: fixed;
  right: 0;
  margin: 0px 16px;
  z-index: 444;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation-name: modal;
  animation-duration: 0.2s;

  > p {
    font: 600 1rem Inter;
    padding: 12px 8px;
  }

  > hr {
    border: 1px solid var(--light-gray);
    width: 80%;
  }

  > button {
    background: transparent;
    color: var(--main-salmon);
    padding: 12px;
    font: 700 1.4rem Inter;
    border: 0;
    text-align: start;
    cursor: pointer;
  }

  @keyframes modal {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div``;

export const CreateButton = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 36px;
  background: var(--main-salmon);
  border: 0;
  padding: 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s linear;
  z-index: 99;

  &:hover {
    box-shadow: 0px 4px 10px 0px var(--shadow);
  }
`;

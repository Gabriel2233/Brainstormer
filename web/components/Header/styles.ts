import styled from "styled-components";

export const Container = styled.div`
  background: var(--main-white);
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 14px 0px var(--shadow);
`;

export const IconNameGroup = styled.header`
  padding: 16px;
  height: 100%;
  display: flex;

  > h2 {
    font: 700 2.8rem "Boogaloo";
    letter-spacing: 0.2rem;
    color: var(--main-black);
    padding: 0 8px;
  }
`;

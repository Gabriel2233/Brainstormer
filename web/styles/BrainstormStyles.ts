import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  background: var(--brainstorm-bg);
`;

export const Header = styled.header`
  width: 100%;
  border-bottom: var(--light-gray);
  background: var(--main-white);
  box-shadow: 0px 4px 9px var(--shadow);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderText = styled.h2`
  display: flex;
  align-items: center !important;

  font: 600 1.8rem Inter;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > h2 {
    text-align: start;
    padding: 4px;
    font: 700 1.8rem Inter;
    color: var(--secondary-black);
  }
`;

export const CollaborateButton = styled.button`
  padding: 10px;
  background: var(--main-salmon);
  color: var(--main-white);
  border: 0;
  border-radius: 4px;
  margin: 0 16px;
  cursor: pointer;

  > p {
    padding: 0 8px;
    font: 600 1.5rem Inter;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.div`
  width: 100%;

  > h2 {
    font: 500 1.5rem Inter;
    color: var(--secondary-black);
    margin: 52px;
  }
`;

export const StormPiecesGrid = styled.div`
  width: 90%;
  max-width: 960px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

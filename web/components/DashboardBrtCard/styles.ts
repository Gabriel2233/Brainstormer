import styled from "styled-components";

export const Container = styled.div`
  margin: 56px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid var(--light-gray);
  border-radius: 8px;
  background: var(--light-white);
  cursor: pointer;
`;

export const BrainstormInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border-bottom: 2px solid var(--light-gray);

  > p {
    font: 600 1.2rem Inter;
    color: var(--main-black);
  }
`;

export const BrainstormTitle = styled.div`
  padding: 24px 0;

  > h3 {
    font: 700 2.4rem Inter;
    text-align: center;
    padding: 18px 6px;
  }
`;

export const Active = styled.div`
  width: 100%;
  padding: 4px;

  display: flex;
  align-items: flex-end;
  margin: 4px;
  transition: 0.1s linear;
`;

export const Group = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-self: flex-end;

  > p {
    font: 600 1.5rem Inter;
    padding: 0 6px;
  }
`;

export const StormPieces = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    font: 500 1rem Inter;
    padding: 0 4px;
  }
`;

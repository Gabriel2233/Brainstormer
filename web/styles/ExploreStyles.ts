import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: var(--main-white);
`;

export const MainContent = styled.main`
  width: 100%;
  max-width: 1026px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 36px 0 24px 0;
`;

export const SearchInput = styled.input`
  margin: 36px 0px;
  padding: 12px 16px;
  font: 1.5rem 500 Inter;
  border: 0;
  width: 60%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background: var(--light-gray);

  &::placeholder {
    color: var(--secondary-black);
  }
`;

export const SearchButton = styled.button`
  background: var(--main-salmon);
  display: block;
  padding: 10px;
  border: 0;
  cursor: pointer;
  font-size: 1rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const CardsContainer = styled.div`
  width: 90%;
  max-width: 980px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

import { styled } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const RecipeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem 2rem;
`;

const NewDietBtn = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid lightgray;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 1rem;
  background-color: #a5ce55;
  font-size: 1.725rem;

  display: ${({ mode }) => (mode ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
`;

const FilterWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  overflow-x: scroll;
  gap: 0.3rem;
`;

const FilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  color: #bebebe;
  border: 1px none;
  border-radius: 0.8rem;
  width: 20%;
  text-align: center;
  padding: 0.5rem;
  cursor: pointer;
  white-space: nowrap;

  h4 {
    margin-left: 0.5rem;
    font-family: bold;
  }

  &:hover {
    transform: scale(1.1);
    color: green;
  }
`;

export { Container, RecipeList, NewDietBtn, FilterWrapper, FilterButton };

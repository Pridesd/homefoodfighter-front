import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
`;

const IngredientList = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;

const Ingredient = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ already }) => (already ? '0.2' : '1')};

  svg {
    width: 4.725rem;
    height: 4.725rem;
    border: ${({ selected }) => (selected ? '3px solid #a5ce55' : 'none')};
    border-radius: 50%;
    @media only screen and (max-width: 768px) {
      width: 3rem;
      height: 3rem;
    }
  }
  transition: all 0.4s ease;
`;

export { Container, IngredientList, Ingredient };

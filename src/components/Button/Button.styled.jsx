import styled from 'styled-components';

const Button = styled.button`
  padding: 20px 20px;
  height: ${(props) => props.height || '100%'};
  width: ${(props) => props.width || '80%'};
  background-color: ${(props) => props.backgroundColor || '#a5ce55'};
  color: ${(props) => props.color || 'white'};
  border: 3px solid #a5ce55;
  box-shadow: 0px 6px 2px 0px rgba(134, 145, 165, 0.25);
  -webkit-box-shadow: 0px 6px 2px 0px rgba(134, 145, 165, 0.25);
  -moz-box-shadow: 0px 6px 2px 0px rgba(134, 145, 165, 0.25);
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1.3rem;
  transform: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
    white-space: nowrap;
  }
`;

export { Button };

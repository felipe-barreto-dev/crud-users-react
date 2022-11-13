import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => {
    switch (props.theme) {
      case 'danger':
        return '#dc3545';
      case 'warning':
        return '#ffc107';
      default:
        return '#007bff';
    }
  }};
  margin: 10px;
  padding: 8px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  transition: 0.4s;

  &:hover {
    filter: brightness(0.8);
  }
`;

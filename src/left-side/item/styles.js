import styled from 'styled-components';

export const Item = styled.div`
  display: ${(props) => (props.isDragging ? 'none' : 'flex')};
  margin: 5px;
  border: solid 1px;
  padding: 10px;
`;

export const Text = styled.p``;

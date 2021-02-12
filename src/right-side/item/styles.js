import styled from 'styled-components';

export const Group = styled.div`
  border: solid 1px ${({ isOver }) => isOver ? 'red' : 'black'};
  padding: 10px;

  ${(props) => (props.isOver && !props.isOverHalf && `
    margin-left: 100px;
  `)}

  margin: 0 10px;
  height: min-content;
  width: 100px;
  cursor: move;
`;

export const Item = styled.div`
  margin: 5px;
  border: solid 1px;
  padding: 10px;
`;

export const Text = styled.p``;

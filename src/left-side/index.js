import React from 'react';
import Item from './item';

import { Container } from './styles';

const LeftSide = ({ items }) => {
  return (
    <Container>
      {items.map((item, index) => (
        <Item key={item.key} item={item} index={index} />
      ))}
    </Container>
  );
}

export default LeftSide;

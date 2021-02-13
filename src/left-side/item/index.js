import React, { useEffect } from 'react'
import { types } from '../../constants';
import { useDrag } from 'react-dnd';

import { Item as Container, Text } from './styles';

const Item = ({ item, index }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: types.ITEM, label: item.label, index, key: item.key },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Container ref={drag} isDragging={isDragging}>
      <Text>
        {item.label}
      </Text>
    </Container>
  )
};

export default Item;


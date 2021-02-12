import React from 'react';
import { useDrag } from 'react-dnd';
import { types } from '../../../constants';

import { Container, Text } from './styles';

const Item = ({ item, index, onSetItems }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: types.ITEM, label: item.label, index, key: item.key },
    end: (item) => onSetItems(item),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Container ref={drag}>
      <Text>
        {item.label}
      </Text>
    </Container>
  );
};

export default Item;

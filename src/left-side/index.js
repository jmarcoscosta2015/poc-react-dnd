import React, { useState } from 'react';
import Item from './item';
import { useDrop } from 'react-dnd';
import { types } from '../constants';

import { Container } from './styles';

const LeftSide = ({ items, onSetItems }) => {
  const [index, setIndex] = useState(0);

  const handleDrop = (item, monitor) => {
    if (item.type !== 'Item') return;

    alert('Item dropped in left side');

    const { index: newIndex } = monitor.getDropResult() || { index: items.length };

    setIndex(newIndex);
    onSetItems([ ...items, item ]);
  };

  const [, drop] = useDrop({
    accept: [types.ITEM],
    drop: (item, monitor) => {
      handleDrop(item, monitor);

      return { index };
    },
    canDrop: (item) => item.type === types.ITEM,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <Container ref={drop}>
      {items.map((item, index) => (
        <Item key={item.key} item={item} index={index} />
      ))}
    </Container>
  );
}

export default LeftSide;

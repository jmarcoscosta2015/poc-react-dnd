import React, { useState, useEffect, useRef } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { items, types } from '../../constants';

import { Group as GroupContainer, Item, Text } from './styles';

const Group = ({ group, index, overHalf, onSetItems, onSetCanDropGroup }) => {
  const [items, setItems] = useState(group.items);
  const [itemIndex, setItemIndex] = useState(0);

  const ref = useRef(null);

  const handleNewItem = (item, monitor) => {
    if (item.type !== 'Item') return;

    alert('Item dropped');

    const { index } = monitor.getDropResult() || { index: items.length };

    setItemIndex(index);
    setItems([ ...items, item ]);
    onSetItems(item);
  };

  const [, drag] = useDrag({
    item: { type: types.GROUP, label: group.label, index, key: group.key },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: [types.ITEM],
    drop: (item, monitor) => {
      handleNewItem(item, monitor);

      return { index: itemIndex }
    },
    canDrop: (item) => item.type === 'Item',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  useEffect(() => {
    onSetCanDropGroup(!isOver);
  }, [isOver]);

  drag(drop(ref));

  return (
    <GroupContainer ref={ref} isOver={isOver} overHalf={overHalf}>
      <Text>{group.label}</Text>
      {items.map((item) => (
        <Item key={item.key}>
          {item.label}
        </Item>
      ))}
    </GroupContainer>
  );
}

export default Group;

import _ from 'lodash';
import React, { useState } from 'react';
import { types } from '../constants';
import { useDrop } from 'react-dnd';
import Group from './group';

import { Container, Text } from './styles';

const RightSide = ({ items, onSetItems }) => {
  const [groupList, setGroupList] = useState([]);
  const [overHalf, setOverHalf] = useState(false);
  const [canDropGroup, setCanDropGroup] = useState(true);

  const handleUpdateItems = (item) => {
    const newItems = items.filter(currentItem => currentItem.key !== item.key);
    onSetItems(newItems);
  };

  const handleDrop = (item, monitor) => {
    if (item.type !== 'Item') return;

    const { index } = monitor.getDropResult() || { index: groupList.length };
    const newGroup = {
      key: index,
      label: `Group ${index + 1}`,
      items: [item],
      type: 'Group',
    };

    setGroupList([ ...groupList, newGroup ]);

    handleUpdateItems(item);

    return index;
  };

  const [, drop] = useDrop({
    accept: [types.ITEM, types.GROUP],
    drop: (item, monitor) => {
      const index = handleDrop(item, monitor);

      return { index };
    },
    canDrop: () => canDropGroup,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <Container ref={drop}>
      {!_.isEmpty(groupList) && groupList.map((group, index) => (
        <Group
          key={index}
          group={group}
          index={index}
          overHalf={overHalf}
          onSetItems={handleUpdateItems}
          onSetCanDropGroup={setCanDropGroup}
        />
      ))}

      <Text>
        Drag & Drop the items here to create a new group
      </Text>
    </Container>
  );
}

export default RightSide;

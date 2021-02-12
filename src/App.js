import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import LeftSide from './left-side';
import RightSide from './right-side';

import { items } from './constants';

import { Container } from './styles';

const App = () => {
  const [itemsList, setItemsList] = useState(items);

  return (
    <Container>
      <DndProvider backend={HTML5Backend}>
        <LeftSide items={itemsList} />
        <RightSide items={itemsList} onSetItems={setItemsList} />
      </DndProvider>
    </Container>
  );
}

export default App;

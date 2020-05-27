import React from 'react';
import './App.css';

import { StoreProvider } from "./utils/store";
import Counter from "./components/Counter";

function App() {
  return (
    <StoreProvider>
      <Counter />
    </StoreProvider>
  );
}

export default App;

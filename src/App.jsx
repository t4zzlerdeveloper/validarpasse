import './App.css';


import Home from "./Views/Home";
import Sheerid from './Views/Sheerid';
import Map from "./Views/Map";
import Load from "./Views/Load";
import Valid from "./Views/Validated";
import Invalid from './Views/Invalidated';

import React from 'react';
import { createState, useState } from '@hookstate/core';

export const globalIndex = createState(0);

function App() {
  const pages = [<Home />, <Sheerid />, <Map />, <Load />, <Valid />, <Invalid />];

  const pageIndex = useState(globalIndex);

  if(window.location.pathname === process.env.REACT_APP_API_URL && pageIndex.get() === 0){
    pageIndex.set(2);
  }

  return pages[pageIndex.get()];

}

export default App;

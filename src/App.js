import React, { useState } from 'react'

import Axios from 'axios';

import { MainContent } from './pages/MainContent';
import './components/Event/EventCreator.css';
import './components/Validation/RegisterForms.css';


function App() {

  return (
    <div className="App">

      <MainContent />

      {/* <EventCreator /> */}
    </div>

  );
}
export default App;

import React from 'react';

import Bath from '../Components/Bath';
import Bedroom from '../Components/Bedroom';
import Kitchen from '../Components/Kitchen';
import LivingRoom from '../Components/LivingRoom';
import Oven from '../Components/Oven';
import Sink from '../Components/Sink';


import '../App.css';

const App = () => {

  return (
    <div id="FloorPlan">

      <Kitchen />
      <Bath />
      <Bedroom />
      <LivingRoom />
      <Oven />
      <Sink />

      
    </div>
  );
}

export default App;
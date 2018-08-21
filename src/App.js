import React, { Component } from 'react';
import { NologisDLMMap } from '@nologis/maps';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NologisDLMMap apiKey='qa23AzyM2CbfhY3Y75mU1Zcps0uzyThr' venueId='f46b7922-310f-490d-bfe4-9bd6cc7eb79e'/>
      </div>
    );
  }
}

export default App;

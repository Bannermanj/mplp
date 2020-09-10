import React from "react";
import "./index.scss";

//Import Components
import PredictionContainer from "./Predictions/PredictionContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <PredictionContainer />
      </div>
    );
  }
}

export default App;

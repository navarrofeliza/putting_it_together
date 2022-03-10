import React from "react";
import "./App.css";
import PuttingItTogether from "./components/MyNewComponent";

function App() {
  return (
    <div className="App">
      <PuttingItTogether
        firstName="Jane"
        lastName="Doe"
        age={45}
        hairColor="Black"
      />
      <PuttingItTogether
        firstName="John"
        lastName="Smith"
        age={88}
        hairColor="Brown"
      />
      <PuttingItTogether
        firstName="Walter"
        lastName="White"
        age={50}
        hairColor="None"
      />
      <PuttingItTogether
        firstName="Vox"
        lastName="Akuma"
        age={32}
        hairColor="Black"
      />
    </div>
  );
}

export default App;

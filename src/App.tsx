import React from 'react';
import {TransformProvider} from "./examples/game-test/transform";
import {AudioProvider} from "./examples/game-test/audio";
import {MyJumpComponent} from "./examples/game-test/MyJumpComponent";

function App() {
  return (
      <AudioProvider>
        <TransformProvider>
          <MyJumpComponent/>
        </TransformProvider>
      </AudioProvider>
  );
}

export default App;

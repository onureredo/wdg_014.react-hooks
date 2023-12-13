import { useState } from 'react';
import Effect from './components/useEffect/Effect';
import Counter from './components/useState/Counter';
import Name from './components/useState/Name';
import Object from './components/useState/Object';
import Example from './components/useEffect/Example';

function App() {
  const [showEffect, setShowEffect] = useState(true);

  return (
    <>
      {/* <Counter /> */}
      {/* <Name /> */}
      {/* <Object /> */}

      {/* {showEffect && <Effect />}
      <button onClick={() => setShowEffect(!showEffect)}>
        Toggle Effect Component
      </button> */}
      <Example />
    </>
  );
}

export default App;

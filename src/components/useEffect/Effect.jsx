import { useState, useEffect } from 'react';

function Effect() {
  const [name, setName] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    console.log('Window resized. New width:', windowWidth);
    setWindowWidth(window.innerWidth);
  };

  // every single useEffect always fire on first render
  // on first render
  useEffect(() => {
    console.log('The component has been mounted');
  }, []);

  // on every render
  useEffect(() => {
    console.log('re-rendered');
  });

  // depends on state
  useEffect(() => {
    console.log('state changed');
  }, [name]);

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);

    return () => {
      console.log('component unmounted');
      window.removeEventListener('resize', updateWindowWidth);
    };
  });

  return (
    <div>
      <h2>Effect.jsx</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='type something'
      />
    </div>
  );
}

export default Effect;

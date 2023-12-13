import { useState } from 'react';

function Name() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(e.target.nameInput.value);
  };

  console.log('re-rendered');
  return (
    <div>
      <p>Name is: {name}</p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='your name'
          name='nameInput'
          //   value={name}
          // onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Name;

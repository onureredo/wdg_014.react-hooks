import { useState } from 'react';

function Object() {
  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: 1968,
    color: 'red',
  });

  const updateCar = () => {
    setCar((prev) => ({
      ...prev,
      year: 2022,
      color: 'black',
    }));
  };

  return (
    <div>
      <p>
        I have a {car.color} {car.brand} {car.model} from {car.year}
        <button onClick={updateCar}>Update Car</button>
      </p>
    </div>
  );
}

export default Object;

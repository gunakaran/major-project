import React, { useState } from 'react';

function AddNumbers() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  function handleAddition() {
    setResult(num1 + num2);
  }

  return (
    <div>
      <input type="number" value={num1} onChange={(event) => setNum1(Number(event.target.value))} />
      <input type="number" value={num2} onChange={(event) => setNum2(Number(event.target.value))} />
      <button onClick={handleAddition}>Add</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default AddNumbers;

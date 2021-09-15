/* eslint-disable react/button-has-type */
/* eslint-disable no-alert */
import { useState } from "react";
import { Example } from '../Example';


export function Root() {
  const [count, setCount] = useState(0);

  function handleAlertClick() {
    setTimeout(() => {
      alert(`You clicked on: ${count}`);
    }, 3000);
  }
  return <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
    <button onClick={handleAlertClick}>
      Show alert
    </button>
    <Example />
  </div>
}

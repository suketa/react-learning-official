import { useState } from 'react';

export default function Clock(props) {
  // const [color, setColor] = useState(props.color);
  return (
    <h1 style={{ color: props.color }}>
      {props.time}
    </h1>
  );
}

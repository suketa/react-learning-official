import { useState } from "react";
import { useImmer } from "use-immer";
import Background from "./Background";
import Box from "./Box";

const initialPosition = {
  x: 0,
  y: 0,
};

export default function Canvas() {
  const [shape, setShape] = useImmer({
    color: "orange",
    position: initialPosition,
  });

  function handleMove(dx, dy) {
    const x = shape.position.x + dx;
    const y = shape.position.y + dy;
    setShape((draft) => {
      draft.position = { x, y };
    });
  }

  function handleColorChange(e) {
    setShape((draft) => {
      draft.color = e.target.value;
    });
  }

  return (
    <>
      <select value={shape.color} onChange={handleColorChange}>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag me!
      </Box>
    </>
  );
}

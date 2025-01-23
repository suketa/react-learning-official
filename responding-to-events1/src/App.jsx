export default function LightSwitch() {
  function handleClick(event) {
    event.preventDefault();
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }

  return (
    <button onClick={(event) => handleClick(event)}>
      Toggle the lights
    </button>
  );
}

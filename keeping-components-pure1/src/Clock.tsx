export default function Clock({ time }) {
  let hours = time.getHours();
  const className = hours >= 0 && hours <= 6 ? 'night' : 'day';
  // let minutes = time.getMinutes();
  // const className = minutes % 2 === 0 ? 'night' : 'day';
  return (
    <h1 id="time" className={className}>
      {time.toLocaleTimeString()}
    </h1>
  );
}


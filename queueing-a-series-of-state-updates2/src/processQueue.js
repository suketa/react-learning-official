export function getFinalState(baseState, queue) {
  let finalState = baseState;

  // TODO: do something with the queue...
  queue.forEach((elem) => {
    if (typeof elem === "function") {
      finalState = elem(finalState);
    } else {
      finalState = elem;
    }
    return finalState;
  });

  return finalState;
}

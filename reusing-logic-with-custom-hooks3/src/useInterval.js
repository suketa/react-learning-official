import { useEffect } from "react";

function useInterval(callback, delay) {
  useEffect(() => {
    const id = setInterval(callback, delay);
    return () => clearInterval(id);
  }, [delay, callback]);
}

export default useInterval;

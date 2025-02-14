import { useEffect, useRef, useLayoutEffect } from 'react';
// import { experimental_useEffectEvent as useEffectEvent } from 'react';

export function useInterval(onTick, delay) {
  const refOnTick = useRef(onTick);

  useEffect(() => {
    console.log('✅ Setting up an interval with delay ', delay)
    const id = setInterval(refOnTick.current, delay);
    return () => {
      console.log('❌ Clearing an interval with delay ', delay)
      clearInterval(id);
    };
  }, [delay]);
}


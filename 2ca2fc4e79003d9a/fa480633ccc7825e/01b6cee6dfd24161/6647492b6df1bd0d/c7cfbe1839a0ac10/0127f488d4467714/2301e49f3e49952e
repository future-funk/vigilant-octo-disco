import { useEffect, useRef } from 'react';

export function useCustomCompareEffect(effect: any, deps: any, depsEqual: any) {
  const ref = useRef();

  if (!ref.current || !depsEqual(deps, ref.current)) {
    ref.current = deps;
  }

  //onChange binding handle from inside. need a way to find get bind when comp.load

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, ref.current);
}

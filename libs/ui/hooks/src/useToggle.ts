import { useState, useCallback } from "react";

/**
 * A hook that provides a boolean state and a function to toggle the state.
 * @param {boolean} [initialValue=false] - The initial value of the state.
 * @returns {[boolean, function]} A tuple with the current value of the state and a function to toggle the state.
 */
type UseToggle = (initialValue?: boolean) => [boolean, (nextValue?: boolean) => void];

const useToggle: UseToggle = (initialValue = false) => {
  const [value, setValue] = useState<boolean>(initialValue);

  /**
   * A function to toggle the value of the state.
   * @param {boolean} [nextValue] - The next value of the state. If not provided, the state will be toggled.
   */
  const toggleValue = useCallback(
    (nextValue?: boolean) => {
      setValue((prevValue) =>
        typeof nextValue === "boolean" ? nextValue : !prevValue
      );
    },
    [setValue]
  );

  return [value, toggleValue];
};

export default useToggle;

import React from 'react';

/**
 *
 * @param {boolean} initial initial state
 * @returns a stateful boolean value, and a function to toggle it.
 */
export const useToggle = (initial) => {
  const [initialValue, setInitialValue] = React.useState(initial);

  function toggle() {
    setInitialValue(!initialValue);
  }
  return [initialValue, toggle];
};

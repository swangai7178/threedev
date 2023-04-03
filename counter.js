/*
 *   Copyright (c) 2023
 *   All rights reserved.
 */
export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 5));
  setCounter(0);
}

import { useState } from "react";

export const useLocalStorage = (key, value) => {
  const localStorageItem = localStorage.getItem(key);
  const initialState = JSON.parse(localStorageItem) || value;
  const [state, setState] = useState(initialState);

  const setStateAndLocalStorage = value => {
    setState(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [state, setStateAndLocalStorage];
};

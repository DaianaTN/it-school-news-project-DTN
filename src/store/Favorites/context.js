import { useReducer } from "react";
import { createContext } from "react";
import { useLocalStorage } from "../../utils/hooks/useLocalStorage";
import { favoritesReducer, initialState } from "./reducer";

export const FavoritesContext = createContext();

export const FavoritesProvider = props => {
  const { children } = props;
  const [initialLocalStorageState] = useLocalStorage("favorites", initialState);
  const [state, dispatch] = useReducer(
    favoritesReducer,
    initialLocalStorageState
  );

  const favoritesContextValue = {
    favoritesState: state,
    favoritesDispatch: dispatch,
  };

  return (
    <FavoritesContext.Provider value={favoritesContextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

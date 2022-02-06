import {
  useReducer,
  createContext,
  FC,
  useContext,
  Reducer,
  useEffect,
} from "react";
import { setHeaderPhoto } from "./actions";
import reducer, { Action, initialState, State } from "./reducer";

const AppContext = createContext(null);

export const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    initialState
  );

  useEffect(() => {
    if (!state.headerPhoto) {
      getHeaderPhoto();
    }
  }, [state.headerPhoto]);

  const getHeaderPhoto = async () => {
    try {
      const res = await fetch(`/api/photos/random`);
      const { response } = await res.json();

      setHeaderPhoto(response[0])(dispatch);
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  };

  setInterval(getHeaderPhoto, 1000 * 60 * 60);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useData = () => useContext(AppContext);

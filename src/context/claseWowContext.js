import { createContext, useReducer } from "react";
import { produce } from "immer";

const actions = { SET_COLOR: "set-color" };
const ClasesWowContext = createContext({});
const initialState = {
  nombre: "",
  armadura: "",
  color: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_COLOR:
      state.color = action.payload;
      return;
    default:
      return;
  }
};
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(produce(reducer), initialState);
  return (
    <ClasesWowContext.Provider value={[state, dispatch]}>
      {children}
    </ClasesWowContext.Provider>
  );
};
export { Provider, actions };
export default ClasesWowContext;

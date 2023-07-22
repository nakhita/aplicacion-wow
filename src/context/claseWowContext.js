import { createContext, useReducer } from "react";
import { produce } from "immer";

const actions = {
  ADD_CLASE: "add-clase",
  SET_ATRIBUTO: "set-atributo",
};

const ClasesWowContext = createContext({});
const initialState = {
  nombre: "",
  armadura: "",
  color: "#000000",
  clases: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_ATRIBUTO:
      state[action.payload.atributo] = action.payload.valor;
      return;
    case actions.ADD_CLASE:
      state.clases.push({
        nombre: state.nombre,
        armadura: state.armadura,
        color: state.color,
      });
      state.nombre = "";
      state.armadura = "";
      state.color = "#000000";
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

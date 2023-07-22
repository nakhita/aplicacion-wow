import "./Header.css";
import React, { useContext, useReducer } from "react";
import { produce } from "immer";
import ClasesWowContext, { actions } from "../context/claseWowContext";

const reducer = (state, action) => {};
function Header() {
  const [state, dispatch] = useContext(ClasesWowContext);
  return (
    <form className="form-contenedor-header">
      <fieldset>
        <legend>Nueva Clases</legend>
        <div className="div-contenedor">
          <span className="items">
            Nombre:{" "}
            <input
              className="input-text"
              name="nombre"
              type="text"
              tabindex="1"
            />
          </span>
          <span className="items">
            Color:
            <input
              type="color"
              className="colorBoton"
              value={state.color}
              onChange={(e) =>
                dispatch({ type: actions.SET_COLOR, payload: e.target.value })
              }
            />
          </span>
        </div>
        <div className="div-contenedor">
          <span className="items">
            Tipo de armadura:
            <select name="armadura" id="armadura-select" tabindex="2">
              <option value="">--Elija una opcion--</option>
              <option value="tela">Tela</option>
              <option value="cuero">Cuero</option>
              <option value="malla">Malla</option>
              <option value="placa">Placa</option>
            </select>
          </span>
          <span className="items">
            <button className="agregar-boton">Agregar</button>
          </span>
        </div>
      </fieldset>
    </form>
  );
}

export default Header;

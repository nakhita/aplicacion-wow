import { useContext, useMemo } from "react";
import ClasesWowContext from "../../context/claseWowContext";

export default function useRows() {
  const [state] = useContext(ClasesWowContext);
  const rows = useMemo(() => state.clases, [state.clases]);

  return rows;
}

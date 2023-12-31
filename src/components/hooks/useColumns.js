import { useMemo } from "react";

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "Clase",
        accessor: "nombre",
      },
      {
        Header: "Armadura",
        accessor: "armadura",
      },
    ],
    []
  );

  return columns;
}

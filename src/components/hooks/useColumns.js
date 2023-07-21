import { useMemo } from "react";

export default function useColumns() {
 const columns = useMemo(
   () => [
     {
       Header: "Clase",
       accessor: "clase"
     },
     {
       Header: "Armadura",
       accessor: "armadura"
     }
   ],
   []
 );

 return columns;
}

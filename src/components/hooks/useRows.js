import { useMemo } from "react";

export default function useRows() {
 const rows = useMemo(
   () => [
     {
       clase: "Sacerdore",
       armadura: "Tela",
       color: "Color"
     },
     {
      clase: "Sacerdore",
       armadura: "Tela",
       color: "Color"
     },
     {
      clase: "Sacerdore",
       armadura: "Tela",
       color: "Color"
     }
   ],
   []
 );

 return rows;
}

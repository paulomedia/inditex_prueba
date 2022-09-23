import { useEffect, useState } from "react";

/*
https://usehooks.com/useDebounce/
Usado para evitar que cada vez que se haga un onChange en la busqueda
no se haga renders desnecesários, asi solamente cuando el usuario deja
de teclar se renderiza la correspondiente busqueda
*/
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

import React, { useState } from "react";
import { createContext } from "react";

const Favitems = createContext();

const Favcontext = ({ children }) => {
  const [item, setItem] = useState(false);

  return (
    <Favcontext.Provider value={{ item, setItem }}>
      {children}
    </Favcontext.Provider>
  );
};

export { Favitems, Favcontext };

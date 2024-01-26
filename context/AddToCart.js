import { createContext, useState } from "react";

const ContextStore = createContext({});

export const AddToCart = ({ children }) => {
  const [addToCart, setAddToCart] = useState([]);

  return (
    <ContextStore.Provider
      value={{
        setAddToCart,
        addToCart,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};

export default ContextStore;

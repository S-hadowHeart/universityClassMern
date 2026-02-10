import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ➕ ADD or INCREMENT
  const addToCart = (id) => {
    setCart((prev) => {
      const item = prev.find((p) => p.id === id);

      if (item) {
        return prev.map((p) =>
          p.id === id ? { ...p, quantity: p.quantity + 1 } : p,
        );
      }

      return [...prev, { id, quantity: 1 }];
    });
  };

  // ➖ DECREMENT or REMOVE
  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p))
        .filter((p) => p.quantity > 0),
    );
  };

  return (
    <AppContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

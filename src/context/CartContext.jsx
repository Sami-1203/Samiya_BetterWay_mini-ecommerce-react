// import { createContext, useContext, useReducer } from "react";

// const CartContext = createContext();

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART": {
//       const existing = state.items.find(
//         (item) => item.id === action.payload.id
//       );

//       if (existing) {
//         return {
//           ...state,
//           items: state.items.map((item) =>
//             item.id === action.payload.id
//               ? {
//                   ...item,
//                   quantity:
//                     item.quantity < item.stock
//                       ? item.quantity + 1
//                       : item.quantity,
//                 }
//               : item
//           ),
//         };
//       }

//       return {
//         ...state,
//         items: [...state.items, { ...action.payload, quantity: 1 }],
//       };
//     }

//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, { items: [] });

//   const addToCart = (product) => {
//     console.log("ADD TO CART:", product); // 🔍 debug
//     dispatch({ type: "ADD_TO_CART", payload: product });
//   };

//   return (
//     <CartContext.Provider value={{ cart: state, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ✅ ADD TO CART
  const addToCart = (product) => {
    console.log("ADD TO CART:", product);

    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // ✅ INCREASE QUANTITY
  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ✅ DECREASE QUANTITY
  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ✅ REMOVE ITEM
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);





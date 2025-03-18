import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.id === product.id
          );
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return { cart: [...state.cart, { ...product, quantity: 1 }] };
          }
        }),
      removeFromCart: (id) =>
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === id);
          if (existingItem.quantity > 1) {
            return {
              cart: state.cart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
              ),
            };
          } else {
            return { cart: state.cart.filter((item) => item.id !== id) };
          }
        }),
      deleteFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage", // Key in localStorage
      getStorage: () => localStorage, // Use localStorage
    }
  )
);

// const useCartStore = create((set) => ({
//   cart: [],
//   addToCart: (product) =>
//     set((state) => {
//       const existingItem = state.cart.find((item) => item.id === product.id);
//       if (existingItem) {
//         return {
//           cart: state.cart.map((item) =>
//             item.id === product.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         };
//       } else {
//         return { cart: [...state.cart, { ...product, quantity: 1 }] };
//       }
//     }),
//   removeFromCart: (id) =>
//     set((state) => {
//       const existingItem = state.cart.find((item) => item.id === id);
//       if (existingItem && existingItem.quantity > 1) {
//         // Reduce quantity if greater than 1
//         return {
//           cart: state.cart.map((item) =>
//             item.id === id ? { ...item, quantity: item.quantity - 1 } : item
//           ),
//         };
//       } else {
//         // Remove item if quantity is 1
//         return {
//           cart: state.cart.filter((item) => item.id !== id),
//         };
//       }
//     }),
//   deleteFromCart: (id) =>
//     set((state) => ({
//       cart: state.cart.filter((item) => item.id !== id),
//     })),
//   clearCart: () => set({ cart: [] }),
// }));

// const useCartStore = create((set) => ({
//   cart: [],
//   addToCart: (product) =>
//     set((state) => {
//       const existingItem = state.cart.find((item) => item.id === product.id);
//       if (existingItem) {
//         // Update quantity if item already exists
//         return {
//           cart: state.cart.map((item) =>
//             item.id === product.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         };
//       } else {
//         // Add as new item with quantity = 1
//         return { cart: [...state.cart, { ...product, quantity: 1 }] };
//       }
//     }),
//   removeFromCart: (id) =>
//     set((state) => {
//       const existingItem = state.cart.find((item) => item.id === id);
//       if (existingItem && existingItem.quantity > 1) {
//         // Reduce quantity if greater than 1
//         return {
//           cart: state.cart.map((item) =>
//             item.id === id ? { ...item, quantity: item.quantity - 1 } : item
//           ),
//         };
//       } else {
//         // Remove item if quantity is 1
//         return {
//           cart: state.cart.filter((item) => item.id !== id),
//         };
//       }
//     }),
//   clearCart: () => set({ cart: [] }),
// }));

export default useCartStore;

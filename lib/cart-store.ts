'use client';

import { create } from 'zustand';

export interface CartItem {
  id: number;
    title: string;
      price: number;
        quantity: number;
        }

        interface CartStore {
          items: CartItem[];
            addItem: (id: number, title: string, price: number) => void;
              removeItem: (id: number) => void;
                updateQuantity: (id: number, quantity: number) => void;
                  clearCart: () => void;
                    total: number;
                      count: number;
                      }

                      function loadCart(): CartItem[] {
                        if (typeof window === 'undefined') return [];
                          try {
                              const saved = localStorage.getItem('darb-cart');
                                  return saved ? JSON.parse(saved) : [];
                                    } catch {
                                        return [];
                                          }
                                          }

                                          function saveCart(items: CartItem[]) {
                                            if (typeof window === 'undefined') return;
                                              try {
                                                  localStorage.setItem('darb-cart', JSON.stringify(items));
                                                    } catch {
                                                        // فشل الحفظ
                                                          }
                                                          }

                                                          function calcTotal(items: CartItem[]): number {
                                                            return items.reduce((total, item) => total + item.price * item.quantity, 0);
                                                            }

                                                            function calcCount(items: CartItem[]): number {
                                                              return items.reduce((count, item) => count + item.quantity, 0);
                                                              }

                                                              export const useCartStore = create<CartStore>((set, get) => ({
                                                                items: loadCart(),
                                                                  total: calcTotal(loadCart()),
                                                                    count: calcCount(loadCart()),

                                                                      addItem: (id: number, title: string, price: number) => {
                                                                          const state = get();
                                                                              const existing = state.items.find((item) => item.id === id);
                                                                                  let newItems: CartItem[];

                                                                                      if (existing) {
                                                                                            newItems = state.items.map((item) =>
                                                                                                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                                                                                                          );
                                                                                                              } else {
                                                                                                                    newItems = [...state.items, { id, title, price, quantity: 1 }];
                                                                                                                        }

                                                                                                                            saveCart(newItems);
                                                                                                                                set({ items: newItems, total: calcTotal(newItems), count: calcCount(newItems) });
                                                                                                                                  },

                                                                                                                                    removeItem: (id: number) => {
                                                                                                                                        const newItems = get().items.filter((item) => item.id !== id);
                                                                                                                                            saveCart(newItems);
                                                                                                                                                set({ items: newItems, total: calcTotal(newItems), count: calcCount(newItems) });
                                                                                                                                                  },

                                                                                                                                                    updateQuantity: (id: number, quantity: number) => {
                                                                                                                                                        if (quantity < 1) {
                                                                                                                                                              get().removeItem(id);
                                                                                                                                                                    return;
                                                                                                                                                                        }
                                                                                                                                                                            const newItems = get().items.map((item) =>
                                                                                                                                                                                  item.id === id ? { ...item, quantity } : item
                                                                                                                                                                                      );
                                                                                                                                                                                          saveCart(newItems);
                                                                                                                                                                                              set({ items: newItems, total: calcTotal(newItems), count: calcCount(newItems) });
                                                                                                                                                                                                },

                                                                                                                                                                                                  clearCart: () => {
                                                                                                                                                                                                      saveCart([]);
                                                                                                                                                                                                          set({ items: [], total: 0, count: 0 });
                                                                                                                                                                                                            },
                                                                                                                                                                                                            }));
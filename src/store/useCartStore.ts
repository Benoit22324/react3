import { create } from "zustand";

export type Product = {
    id: number
    name: string
}

interface useCartStoreInterface {
    cart: Product[],
    addItem: (item: Product) => void
    removeItem: (id: number) => void
}

export const useCartStore = create<useCartStoreInterface>((set) => ({
    cart: [],
    addItem: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeItem: (id) => set((state) => ({ cart: state.cart.filter((item: Product) => item.id !== id) }))
}))
import { create } from "zustand";

interface useRecommendStoreInterface {
    total: number
    increment: () => void
    decrement: () => void
}

export const useRecommendStore = create<useRecommendStoreInterface>((set) => ({
    total: 0,
    increment: () => set((state) => ({total: state.total + 1})),
    decrement: () => set((state) => ({total: state.total - 1})),
}))
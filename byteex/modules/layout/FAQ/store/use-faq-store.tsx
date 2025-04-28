import { create } from "zustand";
import { IUseFAQStore } from "../types/interfaces";

export const useFAQStore = create<IUseFAQStore>((set) => ({
    isPlusIconActive: true,
    setPlusIconTrue: () => set((state) => ({isPlusIconActive:!state.isPlusIconActive}) ),
    setPlusIconFalse: () => set({isPlusIconActive:false}),
}));

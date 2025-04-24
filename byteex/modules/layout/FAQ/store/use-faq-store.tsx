import { create } from "zustand";

interface IUseFAQStore {
    isPlusIconActive: boolean;
    setPlusIconTrue: () => void;
    setPlusIconFalse: () => void;
}

export const useFAQStore = create<IUseFAQStore>((set) => ({
    isPlusIconActive: true,
    setPlusIconTrue:() => set((state) => ({isPlusIconActive:!state.isPlusIconActive}) ),
    setPlusIconFalse: () => set({isPlusIconActive:false}),
}));

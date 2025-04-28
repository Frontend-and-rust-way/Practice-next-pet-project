import { create } from "zustand";

interface SliderStore {
  indexOfCurrentCard: number;
  incrementCurrentIndexCard: (length: number) => void;
  decrementCurrentIndexCard: () => void;
}

export const useSliderStore = create<SliderStore>((set, get) => ({
  indexOfCurrentCard: 0,
  incrementCurrentIndexCard: (length: number) => {
    if (get().indexOfCurrentCard < length - 1) {
      set({ indexOfCurrentCard: get().indexOfCurrentCard + 1 });
    }
  },
  decrementCurrentIndexCard: () => {
    if (get().indexOfCurrentCard > 0) {
      set({ indexOfCurrentCard: get().indexOfCurrentCard - 1 });
    }
  },
}));

export default useSliderStore;

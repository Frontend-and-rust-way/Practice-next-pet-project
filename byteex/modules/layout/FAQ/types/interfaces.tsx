export interface IVisualImage {
    src: string
    alt: string
    width: number
    height: number
    className: string
}
export  interface IUseFAQStore {
      isPlusIconActive: boolean;
      setPlusIconTrue: () => void;
      setPlusIconFalse: () => void;
  }
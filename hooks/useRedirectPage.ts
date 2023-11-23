import { create } from "zustand";

type redirectPageStore = {
  isOpen: boolean;
  onOpen: Function;
  onClose: Function;
};

const useRedirectPage = create<redirectPageStore>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRedirectPage;

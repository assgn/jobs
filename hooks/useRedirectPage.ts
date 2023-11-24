import { create } from "zustand";

type redirectPageStore = {
  isOpen: boolean;
  openLink: string;
  companyName: string;
  positionName: string;
  onOpen: Function;
  onClose: Function;
  setCompanyDetails: Function;
};

const useRedirectPage = create<redirectPageStore>((set) => ({
  isOpen: false,
  openLink: "",
  companyName: "",
  positionName: "",
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setCompanyDetails: (
    companyName: string,
    positionName: string,
    link: string
  ) =>
    set({
      companyName: companyName,
      positionName: positionName,
      openLink: link,
    }),
}));

export default useRedirectPage;

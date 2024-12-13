import { create } from 'zustand'

interface State{
    isSideMenuOpen: boolean;

    operSideMenu: () => void;
    closeSideMenu: () => void;
}

export const useUIStore = create<State>()((set) => ({
 isSideMenuOpen: false,

 operSideMenu: () => set({isSideMenuOpen: true}),
 closeSideMenu: () => set({isSideMenuOpen: false})
}))
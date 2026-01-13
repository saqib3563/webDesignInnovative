'use client'
import { createContext, useState } from "react";

export const sideBarContext = createContext()

export const SideBarProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const toggleMenu = () => {
        setOpen(prev => {
            const newOpen = !prev;

            if (newOpen) {
                document.body.classList.add('sidebar-open-body');
            } else {
                document.body.classList.remove('sidebar-open-body');
            }

            return newOpen;
        });
    };
    return (
        <sideBarContext.Provider value={{ open, toggleMenu }}>
            {children}
        </sideBarContext.Provider>
    )
}
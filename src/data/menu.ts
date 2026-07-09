import type { MenuItem } from "@/types";

export const MainMenu: MenuItem[] = [
    {
        label: "Home",
        labelKey: "nav.home",
        href: "/",
        hoverClass: "hover:text-brand-blue",
        activeClass: "text-brand-blue",
    },
    {
        label: "About",
        labelKey: "nav.about",
        href: "/#about",
        hoverClass: "hover:text-brand-gold",
        activeClass: "text-brand-gold",
    },
    {
        label: "Contact",
        labelKey: "nav.contact",
        href: "/contact",
        hoverClass: "hover:text-brand-yellow",
        activeClass: "text-brand-yellow",
    },
];
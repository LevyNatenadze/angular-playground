import { NavbarData } from "./helper";

export const navbarData: NavbarData[] = [
    {
        routerLink: 'home',
        icon: 'fas fa-home',
        label: 'Home'
    },
    {
        routerLink: 'dashboard',
        icon: 'fas fa-file',
        label: 'Dashboard'
    },
    {
        routerLink: 'settings',
        icon: 'fas fa-cogs',
        label: 'Settings',
        items: [
            {
                routerLink: 'settings/profile',
                label: 'Profile'
            },
            {
                routerLink: 'settings/customize',
                label: 'Customize'
            }
        ]
    }
];
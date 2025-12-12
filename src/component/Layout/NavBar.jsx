import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ThemeToggle from '../ThemeToggle';
import { NavLink } from 'react-router-dom';


function NavBar() {
    const { i18n, t } = useTranslation();
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lng", lang);
    };

    return (
        <nav className='navbar px-10! py-3! flex justify-between items-center border-b-grey/50 border-b'>
            {/* <h1 className='text-text-primary! capitalize'>{location.pathname === "/" ? "Home" : location.pathname.slice(1)}</h1> */}
            <ul className='flex gap-4'>
                <li><NavLink to="/">{t("home")}</NavLink></li>
                <li><NavLink to="/profile">{t("profile")}</NavLink></li>
                <li><NavLink to="/settings">{t("settings")}</NavLink></li>
            </ul>
            <div className='flex justify-between items-center'>
                <ThemeToggle />
                <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
                    <DropdownMenuTrigger className='focus-visible:border-none! menu flex items-center gap-3 cursor-pointer rounded-2xl border border-blue-950 dark:border-blue-100 py-0.5 px-2' >
                        {t("language")}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="drop-down-content">
                        <DropdownMenuLabel className="text-medium! text-text-primary">{t("language")}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => changeLanguage("ar")}>{t("arabic")}</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => changeLanguage("en")}>{t("english")}</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => changeLanguage("de")}>{t("german")}</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav >
    )
}

export default NavBar



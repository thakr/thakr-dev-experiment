import React, {useEffect, useState} from 'react'
import {SunIcon, MoonIcon} from '@heroicons/react/outline'
export default function Theme() {
    const [theme, setTheme] = useState<string>("light");
    useEffect(() => {
        let currTheme = localStorage.getItem("theme");
        if (currTheme) {
            setTheme(currTheme);
        } else {
            localStorage.setItem("theme", theme);
        }

    }, [])

    const changeTheme = () => {
        let newTheme = theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    }

    useEffect(() => {
        theme === "dark" ? document.querySelector("html")?.classList.add("dark") : document.querySelector("html")?.classList.remove("dark");
    }, [theme])
  return (
        <button onClick={changeTheme} className='hover:scale-125 transition-transform ease-in-out absolute top-7 left-7'>{theme === "light" ? <SunIcon className='w-10 h-10 text-white opacity-80' /> : <MoonIcon className='w-10 h-10 text-white opacity-80'/>}</button>
  )
}

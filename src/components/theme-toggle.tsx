"use client";


import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";


export function ThemeToggle() {
const [dark, setDark] = useState(false);


useEffect(() => {
const mq = window.matchMedia("(prefers-color-scheme: dark)");
const saved = localStorage.getItem("theme");
const initialDark = saved ? saved === "dark" : mq.matches;
setDark(initialDark);
document.documentElement.classList.toggle("dark", initialDark);
}, []);


const toggle = () => {
const next = !dark;
setDark(next);
document.documentElement.classList.toggle("dark", next);
localStorage.setItem("theme", next ? "dark" : "light");
};


return (
<button
onClick={toggle}
aria-label="Toggle Theme"
className="fixed bottom-5 right-5 rounded-full border bg-white/80 p-3 shadow-md backdrop-blur transition hover:scale-105 dark:border-neutral-800 dark:bg-neutral-900"
>
{dark ? <Sun size={18} /> : <Moon size={18} />}
</button>
);
}
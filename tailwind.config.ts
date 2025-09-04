import type { Config } from "tailwindcss";


const config: Config = {
darkMode: "class",
content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
theme: {
extend: {
borderRadius: {
"2xl": "1rem",
},
boxShadow: {
card: "0 1px 2px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.06)",
},
},
},
plugins: [],
};


export default config;
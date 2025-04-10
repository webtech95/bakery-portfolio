import { createContext } from "react";

const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => { }, // Function placeholder
});

export default ThemeContext;

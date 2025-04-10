import React, { createContext, useState, useContext } from "react";

// Create ThemeContext
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

// ThemeProvider Component
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Export both ThemeContext and useTheme hook
export { ThemeProvider, ThemeContext, useTheme };


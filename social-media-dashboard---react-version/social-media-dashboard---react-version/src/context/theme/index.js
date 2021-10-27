import React, { useContext } from 'react';


const ThemeContext = React.createContext("dark");

export const ThemeContextProvider = (children) => {
    const [theme, setTheme] = React.useState<"dark" | "light">("dark");
    const toggleTheme = () => {
        if (theme === "dark") setTheme("light")
        if (theme === "light") setTheme("dark")
    }
    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme() {
    const context = useContext(ThemeContext);

    return context;
}

export default useTheme;


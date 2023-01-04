// import { ThemeProvider, createTheme } from '@mui/material/styles'
// import CssBaseline from '@mui/material/CssBaseline'

import { createContext, useState } from "react"

export const ThemeContext = createContext({
    isDarkTheme: false,
    toggleTheme: () => {}
})

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const toggleTheme = () : void =>{
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default AppProvider;
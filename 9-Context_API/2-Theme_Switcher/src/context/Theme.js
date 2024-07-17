import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){  //custom hook
    return useContext(ThemeContext)
}
// by this function we don't need to import 'useContext'  in components, we can directly import this function where we need to
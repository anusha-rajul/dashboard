import { createContext, useEffect, useState } from "react"

export const ThemeContextComponent = createContext();

const ThemeContext = (props) => {

  const [theme, setTheme] = useState('dark')

  function changeTheme() {
    setTheme((prev)=>prev === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  },[theme])

  return (
      <ThemeContextComponent.Provider value={{changeTheme, theme}}>
          {props.children}
     </ThemeContextComponent.Provider>
  )
}

export default ThemeContext

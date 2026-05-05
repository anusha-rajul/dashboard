
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FilterContext from './context/FilterContext.jsx'
import ThemeContext from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeContext>
    <FilterContext>
      <App />
    </FilterContext>
    </ThemeContext>
    
 
)

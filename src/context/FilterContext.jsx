import { createContext, useState } from "react"

export const FilterContextComponent = createContext()

const FilterContext = (props) => {
  const [selector, setSelector] = useState({ month: "all", region: "all", product: "all" })
  const [pieChartFilter, setPieChartFilter] = useState('traffic')
 
  return (

          <FilterContextComponent.Provider value={{ selector, setSelector, pieChartFilter, setPieChartFilter }}>
              {props.children}
      </FilterContextComponent.Provider>

  )
}

export default FilterContext

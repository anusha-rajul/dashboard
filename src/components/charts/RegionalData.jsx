import { ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, Legend, Tooltip} from "recharts"
import data from '../../data/dashboardData.json'
import { useContext } from "react"
import { FilterContextComponent } from "../../context/FilterContext"

const RegionalData = () => {
  const { selector } = useContext(FilterContextComponent)
  const filteredData = selector.region === "all" ? data.regionalData : data.regionalData.filter((item)=>item.region.toLowerCase() === selector.region)
  return (
    <div style={{width:'100%', height: 300}}>
          <ResponsiveContainer>
              <ComposedChart data={filteredData}>
                  <XAxis dataKey="region" scale="band" />
                  <YAxis yAxisId="left" orientation="left" stroke="#82ca9d" width="auto" />
                  <YAxis yAxisId="right" orientation="right" stroke="#8884d8" />
                  <Legend />
                  <Tooltip />
                  <Bar yAxisId="left" dataKey="users" barSize={20} radius={[5, 5, 0, 0]} fill="#82ca9d" />
                  <Line yAxisId="right" type="monotone" dataKey="revenue"/>
              </ComposedChart>
       </ResponsiveContainer>
    </div>
  )
}

export default RegionalData

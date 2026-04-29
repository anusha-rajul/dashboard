import {  Pie, PieChart, ResponsiveContainer, Cell} from "recharts"
import data from '../../data/dashboardData.json'
import { useContext } from "react"
import { FilterContextComponent } from "../../context/FilterContext"

const PieChartComponent = () => {
    const {pieChartFilter, setPieChartFilter} = useContext(FilterContextComponent)
    let colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

  return (
    <div style={{width:'100%', height: 300}}>
          <ResponsiveContainer>
              {pieChartFilter === 'traffic' ? <>
                <PieChart>
                 
                  <Pie data={data.trafficSources} fill={colors} dataKey="value" innerRadius="60%"
                      outerRadius="80%" paddingAngle={5} cornerRadius="50%" nameKey="source" label={({ source, value })=>`${source}: ${value}`} >
                  {data.trafficSources.map((entry, index) => (
                      <Cell key={`cell- ${index}`} fill={colors[index % colors.length]} />
                  ))}
                      </Pie>
                  </PieChart></> : <>
                      <PieChart>
                          <Pie data={data.deviceUsage} fill={colors} dataKey="users" innerRadius="50%" outerRadius="70%" name="device" paddingAngle={5}
                              cornerRadius="50%" label={({ device, users }) => `${device}: ${users}`}>
                              {data.deviceUsage.map((entry, index) => (
                                  <Cell key={index} fill={colors[index % colors.length]} />
                              ))}
                              
                          </Pie>
                     </PieChart>
              </>}
          </ResponsiveContainer>

          <select value={pieChartFilter} onChange={(e)=>setPieChartFilter(e.target.value )}>
              <option value="traffic">Traffic</option>
              <option value="device">Device usage</option>
          </select>
          
          
    </div>
    )
   
}

export default PieChartComponent

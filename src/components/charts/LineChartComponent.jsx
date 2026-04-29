import { LineChart, Line, Legend, Tooltip, XAxis, YAxis, CartesianGrid, ResponsiveContainer} from 'recharts'
import data from '../../data/dashboardData.json'
import { useContext } from 'react'
import { FilterContextComponent } from '../../context/FilterContext'


const LineChartComponent = () => {
  const { selector } = useContext(FilterContextComponent)
  return (
      <div style={{width:"100%", height: 300}} >
          <ResponsiveContainer>
              <LineChart data={data.userGrowth}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="month" />
              <YAxis />
              <Legend />
              <Tooltip />
                  <Line dataKey="users" type="monotone" activeDot={{ r: 8, stroke: '#444' }} dot={(props) => {
                      const { cx, cy, payload } = props
                      const isSelected = selector.month !== "all" && payload.month.toLowerCase() === selector.month;
                      return (
                          <circle cx={cx} cy={cy} r={isSelected?6:3} fill={isSelected?'#ff7300':'#8884d8'} />
                      )
          }} />
      </LineChart>
          </ResponsiveContainer>
          
    </div>
  )
}

export default LineChartComponent

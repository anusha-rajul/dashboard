import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts"
import data from '../../data/dashboardData.json'


const PieChartComponent2 = () => {
    let colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
  return (
    <div style={{width:'100%', height: 300}}>
          <ResponsiveContainer>
              <PieChart>
                  <Pie data={data.deviceUsage} label={true} dataKey="users" nameKey="device">
                      {data.deviceUsage.map((entry, index) => (
                            <Cell key={`cell: ${index}`} fill={colors[index % colors.length]} />
                      ))}
              
                      </Pie>
              </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieChartComponent2

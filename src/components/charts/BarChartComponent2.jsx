import { ResponsiveContainer, BarChart, Bar, Tooltip, Legend, XAxis, YAxis, CartesianGrid } from "recharts"
import data from '../../data/dashboardData.json'

const BarChartComponent2 = () => {
  return (
    <div style={{width:'100%', height: 300}}  className="col-span-2" >
          <ResponsiveContainer>
              <BarChart data={data.topProducts} >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="sales" fill="#8884d8" radius={[10, 10, 0, 0]}/>
                  <Bar yAxisId="right" dataKey="revenue" fill="#84d8b4" radius={[10, 10, 0, 0]} />
              </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartComponent2

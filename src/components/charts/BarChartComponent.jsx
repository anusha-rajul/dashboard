import data from '../../data/dashboardData.json'
import { BarChart, Bar, Legend, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { useContext } from 'react'
import { FilterContextComponent } from '../../context/FilterContext'

const BarChartComponent = () => {
     
  const { selector} = useContext(FilterContextComponent)
  const filteredData = selector.month === "all" ? data.ordersTrend : data.ordersTrend.filter((obj)=> obj.month.toLowerCase() === selector.month) 
  return (
    <div style={{width:'100%', height: 300}}>
          <ResponsiveContainer>
              <BarChart data={filteredData}>
                  
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Legend />
                  <Tooltip />
                  <Bar dataKey="orders" fill='#8884d8' activeBar={{fill:'#61d392'}} />
                  
              </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartComponent

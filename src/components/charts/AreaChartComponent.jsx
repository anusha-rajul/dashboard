import { useContext } from 'react';
import data from '../../data/dashboardData.json';
import { AreaChart, Area, Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FilterContextComponent } from '../../context/FilterContext';

const AreaChartComponent = () => {
  const { selector } = useContext(FilterContextComponent)
  return (
    <div style={{width:"100%", height: 300}}>
      <ResponsiveContainer>
          <AreaChart data={data.revenueTrend}>
        <Legend />
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
          <Area type='monotone' dataKey="revenue" dot={(props) => {
            const { cx, cy, payload } = props;
            const isSelected = selector.month !== "all" && payload.month.toLowerCase() === selector.month;
            return (
              <circle cx={cx} cy={cy} r={isSelected?8:4} fill={isSelected?'#ff7300':'#8884d8'} />
            )
         }} />
      </AreaChart>
      </ResponsiveContainer>
    
    </div>
  )
}

export default AreaChartComponent

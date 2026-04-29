
import { useContext } from 'react'
import Revenue from '../components/cards/Revenue'
import TotalUsers from '../components/cards/TotalUsers'
import AreaChartComponent from '../components/charts/AreaChartComponent'
import BarChartComponent from '../components/charts/BarChartComponent'
import LineChartComponent from '../components/charts/LineChartComponent'
import PieChartComponent from '../components/charts/PieChartComponent'
import RecentOrders from '../components/charts/RecentOrders'
import RegionalData from '../components/charts/RegionalData'
import { FilterContextComponent } from '../context/FilterContext'

const Dashboard = () => {
  const { selector, setSelector } = useContext(FilterContextComponent)
  const products = ["Perfume Elite", "Luxury Oud", "Fresh Mist", "Night Essence"];
 
  return (
    <>
      <h5>Filter by month</h5>
      <select value={selector.month} onChange={(e) => setSelector({ ...selector, month: e.target.value })}>
        <option value="all">All</option>
        <option value="jan">Jan</option>
        <option value="feb">Feb</option>
        <option value="mar">Mar</option>
        <option value="apr">Apr</option>
        <option value="may">May</option>
        <option value="jun">Jun</option>
        <option value="jul">Jul</option>
      </select>

      <select value={selector.region} onChange={(e) => setSelector({ ...selector, region: e.target.value })}>
        <option value="all">All</option>
        <option value="india">India</option>
        <option value="usa">Usa</option>
        <option value="uk">UK</option>
        <option value="canada">Canada</option>
        <option value="australia">Australia</option>
      </select>

      <select value={selector.product} onChange={(e) => setSelector({ ...selector, product: e.target.value })}>
        <option value="all">All</option>
        {products.map((prod) => (
          <option key={prod} value={prod}>{prod}</option>
          ))}
      </select>

      <button onClick={()=>setSelector({month:"all", region:"all", product:"all"})}>
          Reset filter
      </button>

    <div className='flex gap-20 flex-wrap items-start justify-center my-10' >
          <TotalUsers />
      <Revenue />
    </div>

     <div className='grid md:grid-cols-2 justify-items-center items-center gap-20 p-10'>
        <LineChartComponent />
        <AreaChartComponent />
        <RegionalData />
        <BarChartComponent />
        <PieChartComponent />
      <RecentOrders />
   
      </div>
         
      </>
  )
}

export default Dashboard


// userGrowth → Line chart
// revenueTrend → Area/Line chart
// ordersTrend → Bar chart
// trafficSources → Pie chart
// deviceUsage → Pie / Bar
// topProducts → Bar chart
// regionalData → Bar chart
// weeklyActivity → Line chart
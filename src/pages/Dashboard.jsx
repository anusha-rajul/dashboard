
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
import { ThemeContextComponent } from '../context/ThemeContext'

const Dashboard = () => {
  const { selector, setSelector, pieChartFilter } = useContext(FilterContextComponent)
  const {changeTheme, theme} = useContext(ThemeContextComponent)
  
  const products = ["Perfume Elite", "Luxury Oud", "Fresh Mist", "Night Essence"];
 
  return (
    <>
      <div id='first' className="bg-white dark:bg-gray-800 dark:text-white container px-10 mx-auto">
      <div className="relative">
       <div className="flex flex-wrap justify-center gap-4 fixed  top-0 right-0 left-0 m-3 p-4 z-50">
      <select className='px-6 py-3 bg-gray-300 dark:bg-gray-500 rounded-lg' value={selector.month} onChange={(e) => setSelector({ ...selector, month: e.target.value })}>
        <option value="all">All</option>
        <option value="jan">Jan</option>
        <option value="feb">Feb</option>
        <option value="mar">Mar</option>
        <option value="apr">Apr</option>
        <option value="may">May</option>
        <option value="jun">Jun</option>
        <option value="jul">Jul</option>
      </select>

      <select className='px-6 py-3 bg-gray-300 rounded-lg dark:bg-gray-500' value={selector.region} onChange={(e) => setSelector({ ...selector, region: e.target.value })}>
        <option value="all">All</option>
        <option value="india">India</option>
        <option value="usa">Usa</option>
        <option value="uk">UK</option>
        <option value="canada">Canada</option>
        <option value="australia">Australia</option>
      </select>

      <select className='px-6 py-3 bg-gray-300 rounded-lg dark:bg-gray-500' value={selector.product} onChange={(e) => setSelector({ ...selector, product: e.target.value })}>
        <option value="all">All</option>
        {products.map((prod) => (
          <option key={prod} value={prod}>{prod}</option>
          ))}
      </select>

      <button className='px-6 py-3 bg-gray-300 rounded-lg dark:bg-gray-500 active:scale-95' onClick={()=>setSelector({month:"all", region:"all", product:"all"})}>
          Reset filter
            </button>
            
            <button className='px-6 py-3 bg-gray-300 rounded-lg dark:bg-gray-500 active:scale-95' onClick={changeTheme}>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</button>
        </div>
      </div>
    <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-5 pt-28' >
          <TotalUsers />
          <Revenue />
    </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 p-10'>
          <div className='w-full'>
            <h2 className='font-semibold text-md md:text-lg text-center'>Monthly User Growth</h2>
            <LineChartComponent />
          </div>
        
          <div className='w-full'>
          <h2 className='font-semibold text-md md:text-lg text-center'>Monthly Revenue Trend</h2>
          <AreaChartComponent />
          </div>
        
          <div className='w-full'>
            <h2 className='font-semibold text-md md:text-lg text-center'>{pieChartFilter === 'traffic' ? "Traffic Sources Distribution" : "Device Usage Distribution"}</h2>
          <PieChartComponent />
          </div>

          <div className='w-full'>
            <h2 className='font-semibold text-md md:text-lg text-center'>Monthly Orders Overview</h2>
            <BarChartComponent />
        </div>
        
          <div className='w-full col-span-1 md:col-span-2'>
            <h2 className='font-semibold text-md md:text-lg text-center'>Users & Revenue by Region</h2>
          <RegionalData />
          </div>
         
          <div className='w-full col-span-1 md:col-span-2 overflow-x-auto'>
            <h2 className='font-semibold text-md md:text-lg text-center'>Latest Customer Orders</h2>
           <RecentOrders />
          </div>
     
   
      </div>
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

import { useContext, useEffect, useState } from 'react'
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
import BarChartSkeleton from '../components/Loading/BarChartSkeleton'
import ChartSkeleton from '../components/Loading/ChartSkeleton'
import Skeleton from 'react-loading-skeleton'
import PieChartSkeleton from '../components/Loading/PieChartSkeleton'
import RegionalChart from '../components/Loading/RegionalChart'


const Dashboard = () => {
  const { selector, setSelector, pieChartFilter } = useContext(FilterContextComponent)
  const { changeTheme, theme } = useContext(ThemeContextComponent)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    
    const timer = setTimeout(() => {
       setIsLoading(false)
    }, 300)
    
    return () => clearTimeout(timer)
  },[selector])
  
  const products = ["Perfume Elite", "Luxury Oud", "Fresh Mist", "Night Essence"];
 
  return (
    <>
      <div id='first' className="text-center bg-white dark:bg-gray-800 dark:text-white container px-10 mx-auto">
  
        <div className="relative">
                 <h1 className='font-bold text-xl'>Filter by Month / Region / Product</h1>
          <div className="flex flex-wrap justify-center gap-4 fixed  top-0 right-0 left-0 m-3 p-4 z-50">
           
      <select className='px-6 py-3 bg-gray-800 text-white dark:bg-gray-500 rounded-lg' value={selector.month} onChange={(e) => setSelector({ ...selector, month: e.target.value })}>
        <option value="all">All</option>
        <option value="jan">Jan</option>
        <option value="feb">Feb</option>
        <option value="mar">Mar</option>
        <option value="apr">Apr</option>
        <option value="may">May</option>
        <option value="jun">Jun</option>
        <option value="jul">Jul</option>
      </select>

      <select className='px-6 py-3 bg-gray-800 text-white rounded-lg dark:bg-gray-500' value={selector.region} onChange={(e) => setSelector({ ...selector, region: e.target.value })}>
        <option value="all">All</option>
        <option value="india">India</option>
        <option value="usa">Usa</option>
        <option value="uk">UK</option>
        <option value="canada">Canada</option>
        <option value="australia">Australia</option>
      </select>

      <select className='px-6 py-3 bg-gray-800 text-white rounded-lg dark:bg-gray-500' value={selector.product} onChange={(e) => setSelector({ ...selector, product: e.target.value })}>
        <option value="all">All</option>
        {products.map((prod) => (
          <option key={prod} value={prod}>{prod}</option>
          ))}
      </select>

      <button className='px-6 py-3 bg-gray-800 text-white rounded-lg dark:bg-gray-500 active:scale-95' onClick={()=>setSelector({month:"all", region:"all", product:"all"})}>
          Reset filter
            </button>
            
            <button className='px-6 py-3 bg-gray-800 text-white rounded-lg dark:bg-gray-500 active:scale-95' onClick={changeTheme}>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</button>
        </div>
      </div>
    <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-5 pt-28' >
          {isLoading ? [1, 2, 3, 4, 5].map((_,i) => (
            <Skeleton key={i} height={50} width={200} borderRadius={10} />
          )): <><TotalUsers />
          <Revenue /></>}
    </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 p-10'>
          <div className='w-full'>
            <h2 className='font-semibold text-md md:text-lg text-center'>Monthly User Growth</h2>
           {isLoading ? <ChartSkeleton /> : <LineChartComponent />}
          </div>
        
          <div className='w-full'>
          <h2 className='font-semibold text-md md:text-lg text-center'>Monthly Revenue Trend</h2>
          {isLoading ? <ChartSkeleton /> : <AreaChartComponent />}
          </div>
        
          <div className='w-full'>
            <h2 className='font-semibold text-md md:text-lg text-center'>{pieChartFilter === 'traffic' ? "Traffic Sources Distribution" : "Device Usage Distribution"}</h2>
          {isLoading ? <PieChartSkeleton /> : <PieChartComponent />}
          </div>

          <div className='w-full'>
            <h2 className='font-semibold text-md md:text-lg text-center'>Monthly Orders Overview</h2>
            {isLoading ?  <BarChartSkeleton height={250} /> : <BarChartComponent />}
        </div>
        
          <div className='w-full col-span-1 md:col-span-2'>
            <h2 className='font-semibold text-md md:text-lg text-center'>Users & Revenue by Region</h2>
          {isLoading ? <RegionalChart /> : <RegionalData />}
          </div>
         
          <div className='w-full col-span-1 md:col-span-2 overflow-x-auto'>
            <h2 className='font-semibold text-md md:text-lg text-center'>Latest Customer Orders</h2>
          {isLoading ? <ChartSkeleton /> :  <RecentOrders />}
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
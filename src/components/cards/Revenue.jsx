import data from '../../data/dashboardData.json'

const Revenue = () => {
  return (
    <>
       <div className='bg-violet-600 w-fit px-10 py-3 text-2xl text-white rounded-lg text-center'>
            Total Revenue:<br />{data.kpis.totalRevenue}
    </div>
          
    <div className='bg-violet-600 w-fit px-10 py-3 text-2xl text-white rounded-lg text-center'>
       Monthly Revenue: <br />{data.kpis.monthlyRevenue}
    </div>
          
    <div className='bg-violet-600 w-fit px-10 py-3 text-2xl text-white rounded-lg text-center'>
      Total Orders: <br />{data.kpis.totalOrders}
    </div>
    </>
  )
}

export default Revenue

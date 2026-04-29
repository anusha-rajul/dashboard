import data from '../../data/dashboardData.json'


const TotalUsers = () => {
    
    return (
    <>
    <div className='bg-violet-600 w-fit px-10 py-3 text-2xl text-white rounded-lg text-center'>
       Total Users: <br />{data.kpis.totalUsers}
    </div>
            
    <div className='bg-violet-600 w-fit px-10 py-3 text-2xl text-white rounded-lg text-center'>
       Active Users: <br />{data.kpis.activeUsers}
    </div>
            
   
    </>
  )
}

export default TotalUsers

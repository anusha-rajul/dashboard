import { useContext } from 'react'
import data from '../../data/dashboardData.json'
import { FilterContextComponent } from '../../context/FilterContext'

const RecentOrders = () => {
    const { selector } = useContext(FilterContextComponent)
    const filteredData = selector.product === "all" ? data.recentOrders : data.recentOrders.filter((item) => item.product.toLowerCase() === selector.product.toLowerCase())

  return (
    <div style={{width: '100%', height: 300}}>
          <table className='table-auto border-separate border border-gray-400 border-spacing-y-3 border-spacing-x-6 w-full'>
              <caption className='caption-top'>
                  Recent Orders
              </caption>
              <thead>
                  <tr>
                  <th className='px-4 py-2'>Order Id</th>
                  <th className='px-4 py-2'>User</th>
                  <th className='px-4 py-2'>Product</th>
                  <th className='px-4 py-2'>Amount</th>
                  <th className='px-4 py-2'>Status</th>
              </tr>
              </thead>

              <tbody className='text-center'>
                  {filteredData.map((order, index) => (
                      <tr key={index}>
                          <td className='px-4 py-2'>{order.orderId}</td>
                          <td className='px-4 py-2'>{order.user}</td>
                          <td className='px-4 py-2'>{order.product}</td>
                          <td className='px-4 py-2'>{order.amount}</td>
                          <td className='px-4 py-2'>{order.status}</td>
                      </tr>
                  ))}
               
             </tbody>
              
      </table>
    </div>
  )
}

export default RecentOrders

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BarChartSkeleton = () => {
  return (
      <div className='flex items-end p-4 h-[250px] gap-10'>
          {[200, 130, 110, 240, 200, 230, 160].map((h, i) => (
                <Skeleton key={i} height={h} width={50} />
          ))}
     
    </div>
  )
}

export default BarChartSkeleton

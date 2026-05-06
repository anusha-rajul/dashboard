import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'


const ChartSkeleton = () => {
  return (
    <div className="h-[250px] p-4">
       <Skeleton height={200} borderRadius={10} />
    </div>
  )
}

export default ChartSkeleton

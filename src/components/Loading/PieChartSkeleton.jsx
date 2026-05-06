import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'


const PieChartSkeleton = () => {
  return (
    <div className="h-[250px] p-5 flex justify-center items-center">
      <Skeleton circle height={250} width={250} />
    </div>
  )
}

export default PieChartSkeleton

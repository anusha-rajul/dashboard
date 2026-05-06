import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'


const RegionalChart = () => {
  return (
    <div className="gap-50 h-[250px] flex items-end p-4">
          {[100, 180, 250, 200, 150].map((h, i) => (
          <Skeleton key={i} height={h} width={30} />
      ))}
    </div>
  )
}

export default RegionalChart

import { useParams } from "react-router-dom"
import "./Reels.scss"

function Reels() {
  const {reelId} = useParams();
  console.log(reelId)
  return (
    <div>
      Reels
    </div>
  )
}

export default Reels

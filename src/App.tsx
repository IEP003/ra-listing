import { Listing } from "./component/Listing"
import { renderData } from "./process/renderData"
import data from './data/etsy.json'

function App() {

  return (
    <>
      <Listing data={renderData(data)}/>
    </>
  )
}

export default App

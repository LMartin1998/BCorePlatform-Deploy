import { GridProvider } from './Contexts/GridContext'
import MapSite from './Home/page'
import SingleGrid from './SingleGrid/page'

export default function Home() {
  return (
    // <GridProvider>
    //   <MapSite></MapSite>
    // </GridProvider>
    <GridProvider>
      <SingleGrid></SingleGrid>
    </GridProvider>
  )
}

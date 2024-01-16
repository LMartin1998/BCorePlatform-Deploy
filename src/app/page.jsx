import { GridProvider } from './Contexts/GridContext'
import MapSite from './Home/page'
import SingleGrid from './SingleGrid/page'

export default function Home() {
  return (
    <GridProvider>
      <SingleGrid></SingleGrid>
    </GridProvider>
  )
}

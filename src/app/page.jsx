import { GridProvider } from './Contexts/GridContext'
import MapSite from './Home/page'

export default function Home() {
  return (
    <GridProvider>
      <MapSite></MapSite>
    </GridProvider>
  )
}

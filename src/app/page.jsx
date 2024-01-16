import { GridProvider } from './contexts/GridContext'
import MapSite from './home/page'
import SingleGrid from './singlegrid/page'

export default function Home() {
  return (
    <GridProvider>
      <SingleGrid></SingleGrid>
    </GridProvider>
  )
}

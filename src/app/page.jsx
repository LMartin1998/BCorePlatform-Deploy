import { GridProvider } from './contexts/GridContext'
import Home from './home/page'

export default function App() {
  return (
    <GridProvider>
      <Home></Home>
    </GridProvider>
  )
}

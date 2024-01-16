import { GridProvider } from './Contexts/GridContext'
import Home from './Home/page'

export default function App() {
  return (
    <GridProvider>
      <Home></Home>
    </GridProvider>
  )
}

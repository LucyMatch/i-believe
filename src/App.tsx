import './styles/main.scss'
import { clusters } from './data/clusters'
import { Header } from './components/Header'
import { ClusterSection } from './components/ClusterSection'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'

function App() {
  return (
    <>
    <Nav />
    <main>
      <Header />
      {clusters.map((cluster) => (
        <ClusterSection key={cluster.id} cluster={cluster} />
      ))}
      <Footer />
    </main>
    </>
  )
}

export default App

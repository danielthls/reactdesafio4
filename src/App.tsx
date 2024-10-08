import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ListingBody from './components/ListingBody'
import { ContextProductCount } from './utils/context-product-count'

function App() {

  const [contextProductCount, setContextProductCount] = useState(0)

  return (
    <ContextProductCount.Provider value={{ contextProductCount, setContextProductCount }}>
      <Header />
      <ListingBody />
    </ContextProductCount.Provider>
  )
}

export default App

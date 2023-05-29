import { FC } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'

interface AppProps {
  
}

const App: FC<AppProps> = ({}) => {
  return (
    <>
      <Nav />
      <Hero />
    </>
  )
}

export default App
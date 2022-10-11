import { useContext } from 'react'
import Main from './components/common/Main'
import Navbar from './components/common/Navbar'


function App() {
  return (
    <main className='flex flex-col justify-between min-h-[calc(100vh)]'>
      <main className='flex flex-col justify-center min-h-[calc(100vh - 60px)] w-[90%] max-w-[450px] mx-auto py-4 flex-grow'>
        <Navbar />
        <Main />
      </main>
    </main>
  )
}

export default App

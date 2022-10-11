import { useContext } from 'react'
import Main from './components/common/Main'
import Navbar from './components/common/Navbar'


function App() {
  return (
    <div className='flex flex-col justify-between min-h-[calc(100vh)]'>
      <main className='flex items-center justify-center min-h-[calc(100vh - 60px)] w-[90%] md:w-[560px] mx-auto py-4 flex-grow'>
        <Navbar />
        <Main />
      </main>
    </div>
  )
}

export default App

import React, {useContext} from 'react'
import { CalculateContext } from '../../context/CalculateContext'

function Display() {
  const useCalContext = useContext(CalculateContext);

  return (
    <div className='rounded-lg p-8 text-3xl font-bold text-right bg-input my-5'>
      {useCalContext.input}
    </div>
  )
}

export default Display

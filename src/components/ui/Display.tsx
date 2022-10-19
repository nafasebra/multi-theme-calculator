import React, {useContext} from 'react'
import { CalculateContext } from '../../context/CalculateContext'

function Display() {
  const useCalContext = useContext(CalculateContext);

  return (
    <div className='select-none rounded-lg p-8 text-3xl font-bold text-right bg-input my-5'>
      {useCalContext.state.display}
    </div>
  )
}

export default Display

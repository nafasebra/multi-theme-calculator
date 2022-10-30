import React, {useContext} from 'react'
import { CalculateContext } from '../../context/CalculateContext'

function Display() {
  const useCalContext = useContext(CalculateContext);
  const {number, display} = useCalContext.state

  return (
    <div className='select-none rounded-lg p-8 text-3xl font-bold text-right bg-input my-5'>
      {number !== "0" ? number : display}
    </div>
  )
}

export default Display

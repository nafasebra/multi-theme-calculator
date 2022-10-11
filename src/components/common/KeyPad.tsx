import React from 'react'
import Button from '../ui/Button'

function KeyPad() {
  return (
    <div className='grid grid-cols-4 grid-rows-5 gap-4 text-3xl'>
      <Button text='7' includedStyle='' />
      <Button text='8' includedStyle='' />
      <Button text='9' includedStyle='' />
      <Button text='DEL' includedStyle='' />
      <Button text='4' includedStyle='' />
      <Button text='5' includedStyle='' />
      <Button text='6' includedStyle='' />
      <Button text='+' includedStyle='' />
      <Button text='1' includedStyle='' />
      <Button text='2' includedStyle='' />
      <Button text='3' includedStyle='' />
      <Button text='-' includedStyle='' />
      <Button text='.' includedStyle='' />
      <Button text='0' includedStyle='' />
      <Button text='/' includedStyle='' />
      <Button text='x' includedStyle='' />
      <Button text='RESET' includedStyle='col-span-2' />
      <Button text='=' includedStyle='col-span-2' />
    </div>
  )
}

export default KeyPad

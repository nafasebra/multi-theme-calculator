import React from 'react'
import Button from '../ui/Button'

function KeyPad() {
  return (
    <div className='grid grid-cols-4 grid-rows-5 gap-4 text-2xl font-bold bg-keypad rounded-lg p-5'>
      <Button text='7' includedStyle='bg-btn-primary text-btn-primary' />
      <Button text='8' includedStyle='bg-btn-primary text-btn-primary' />
      <Button text='9' includedStyle='bg-btn-primary text-btn-primary' />
      <Button text='DEL' includedStyle='bg-btn-secondary text-btn-secondary ' />
      <Button text='4' includedStyle='bg-btn-primary text-btn-primary' />
      <Button text='5' includedStyle='bg-btn-primary text-btn-primary' />
      <Button text='6' includedStyle='bg-btn-primary text-btn-primary' />
      <Button text='+' includedStyle='bg-btn-primary text-btn-primary' />
      <Button text='1' includedStyle='bg-btn-primary text-btn-primary' />
      <Button text='2' includedStyle='bg-btn-primary text-btn-primary' />
      <Button text='3' includedStyle='bg-btn-primary text-btn-primary' />
      <Button text='-' includedStyle='bg-btn-primary text-btn-primary' />
      <Button text='.' includedStyle='bg-btn-primary text-btn-primary' />
      <Button text='0' includedStyle='bg-btn-primary text-btn-primary' />
      <Button text='/' includedStyle='bg-btn-primary text-btn-primary' />
      <Button text='x' includedStyle='bg-btn-primary text-btn-primary' />
      <Button text='RESET' includedStyle='bg-btn-secondary text-btn-secondary col-span-2' />
      <Button text='=' includedStyle='bg-btn-third col-span-2' />
    </div>
  )
}

export default KeyPad

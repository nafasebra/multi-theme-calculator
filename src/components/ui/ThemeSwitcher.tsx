import React, { useCallback, useState } from 'react'

function ThemeSwitcher() {
  const [theme, setTheme] = useState(1);

  const ChangeTheme = useCallback(() => {
    let tempTheme = theme;
    if(tempTheme === 1) tempTheme += 1;
    else if(tempTheme === 2) tempTheme += 1;
    else if (tempTheme === 3) tempTheme = 1;

    setTheme(tempTheme);
    console.log(theme);
  }, [theme, setTheme]);

  return (
    <div className='flex flex-col w-10'>
      <div className='w-full flex items-center justify-between pb-1'>
        <p className='text-sm'>1</p>
        <p className='text-sm'>2</p>
        <p className='text-sm'>3</p>
      </div>
      <div className='cursor-pointer w-full h-4 rounded-full p-1 bg-black' onClick={ChangeTheme}>
        <div className='rounded-full w-2 h-2 bg-white'></div>
      </div>
    </div>
  )
}

export default ThemeSwitcher

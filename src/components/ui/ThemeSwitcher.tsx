import React, { useCallback, useState } from 'react'

function ThemeSwitcher() {
  const [theme, setTheme] = useState(1);

  const ChangeTheme = useCallback(() => {
    let tempTheme = theme;
    if(tempTheme === 1) tempTheme += 1;
    else if(tempTheme === 2) tempTheme += 1;
    else if (tempTheme === 3) tempTheme = 1;

    setTheme(tempTheme);
  }, [theme, setTheme]);

  const HandleTranslate = (theme: number) => {
    switch(theme) {
      case 1:
        return 'translate-x-0';
      case 2:
        return 'translate-x-[14px]';
      case 3:
        return 'translate-x-[28px]';
      default:
        return '';
    }
  }

  return (
    <div className='flex flex-col w-12'>
      <div className='w-full flex items-center justify-between pb-2'>
        <p className='text-xs'>1</p>
        <p className='text-xs'>2</p>
        <p className='text-xs'>3</p>
      </div>
      <div className='cursor-pointer w-full h-5 rounded-full p-1 bg-black' onClick={ChangeTheme}>
        <div className={`rounded-full w-3 h-3 bg-white ${HandleTranslate(theme)}`}></div>
      </div>
    </div>
  )
}

export default ThemeSwitcher

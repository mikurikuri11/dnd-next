"use client";

import { useState } from 'react'

export const TascCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [title, setTitle] = useState('第1の習慣');
  const handleClick = () => {
    setIsClick(!isClick);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  return (
    <div
      onClick={handleClick}
      className='cursor-pointer'>
      {isClick ?
        (<h3>{title}</h3> )
      :
        (<div>
          <input
            type='text'
            value={title}
            onChange={handleSubmit}
            onBlur={handleClick}
            autoFocus
            maxLength={10}
            className='px-0.5'
          ></input>
        </div>)
      }
    </div>
  )
}

import React from 'react'

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
}

const Button = ({type,title} : ButtonProps) => {
  return ( 
    <button className='cursor-pointer border border-white flex items-center py-2 px-4 rounded-full before:ease relative overflow-hidden shadow-lg transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-800 hover:shadow-cyan-100/30 hover:before:-translate-x-30' type={type}>
        <label className="whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button
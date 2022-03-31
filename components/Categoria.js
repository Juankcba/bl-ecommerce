import React from 'react'
import Image from 'next/image'
import useApp from '../hooks/useApp'
const Categoria = ({ categoria }) => {
    const { name, icon, id } = categoria
    const { categoryActual, handleClickCategory } = useApp();
    return (
        <div className={`${categoryActual?.id === id ? 'bg-blue-400' : ''} flex items-center gap-4 w-full border hover:bg-blue-400`}>
            <Image
                width={100}
                height={100}
                src={`/assets/img/${icon}.svg`}
                alt={name}
                className='mr-5'
            />
            <button onClick={() => handleClickCategory(id)} type='button' className='text-white text-2l font-bold hover:cursor-pointer'>{name}</button>
        </div>

    )
}

export default Categoria
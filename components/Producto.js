import React from 'react'
import Image from 'next/image';

import { formatMoney } from '../helpers';
import useApp from '../hooks/useApp';
const Producto = ({ product }) => {
    const { handleClickProducto, handleChangeModal } = useApp()
    const { name, image, price } = product;
    return (
        <div className='border'>
            <Image src={image} alt={`image-${name}`} width={400} height={350} />
            <div className='p-5'>
                <h3 className='text-2xl font-bold'>{name}</h3>
                <p className='mt-5 font-black text-4xl text-blue-500'>{formatMoney(price)}</p>
                <button onClick={() => {
                    handleClickProducto(product)
                    handleChangeModal()
                }} type='button' className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase'>Agregar</button>
            </div>
        </div>
    )
}

export default Producto
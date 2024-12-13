import { Product } from '@/interface'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    product: Product
}

export const ProductGridItem = ({ product }: Props) => {
    return (
        <Link href={`/product/${product.slug}`}>
            <div key={product.name} className='bg-white rounded-lg shadow-md h-[400px]'>
                <div className='relative h-60 w-full'>
                    <Image src={"/images/cuts/"+product.imagen} alt={product.slug} layout='fill' objectFit='cover'/>
                </div>
                <div className='p-4'>
                    <h3 className='text-lg font-semibold'>{product.name}</h3>
                    <p className='text-sm text-gray-500'>{product.description}</p>
                    <div className='mt-4 flex justify-between items-center'>
                        <span className='text-xl font-semibold'>${product.specs.PesoPieza}</span>
                        <button className='px-4 py-1 bg-primary text-white rounded-md'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

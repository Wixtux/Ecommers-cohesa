import { Product } from '@/interface'
import React from 'react'
import { ProductGridItem } from './ProductGridItem'

interface Props {
    products: Product[]
}

export const ProductGrid = ({products}: Props) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mb-10'>
            {
                products.map(product => (
                    <ProductGridItem key={product.name} product={product} />
                ))
            }
        </div>
    )
}

import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard'
import './styles.css'
import { ProductDTO } from '../../models/Product';

type Props = {
    products: ProductDTO[]
}

export default function Listing({ products }: Props) {

    return (
        <div className='de4-container de4-main de4-listing'>
            {
                products &&
                products.map(p =>
                    <ProductCard key={p.id} product={p} />)
            }
        </div>
    )
}
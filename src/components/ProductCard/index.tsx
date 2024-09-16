import { ProductDTO } from '../../models/Product'
import './styles.css'

type Props = {
    product: ProductDTO
}

export default function ProductCard({ product }: Props) {
    return (
        <div className='de4-product-card'>
            <p className='de4-product-name'>{product.name}</p>
            <p className='de4-product-price'>R$ {product.price.toFixed(2)}</p>
        </div>
    )
}
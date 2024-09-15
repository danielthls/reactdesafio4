import ProductCard from '../ProductCard'
import './styles.css'

export default function Listing() {
    return (
        <div className='de4-container de4-main de4-listing'>
            <ProductCard />
            <ProductCard />
        </div>
    )
}
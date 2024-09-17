import { useContext } from 'react'
import './styles.css'
import { ContextProductCount } from '../../utils/context-product-count'
export default function Header() {

    const { contextProductCount } = useContext(ContextProductCount)

    return (
        <header className='de4-header'>
            <nav className="de4-container">
                <h1>DS Filter</h1>
                <div className='de4-nav-right'>{contextProductCount} produtos</div>
            </nav>
        </header>
    )
}
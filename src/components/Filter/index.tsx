import { useEffect, useState } from 'react';
import './styles.css'

type FormData = {
    min_price?: number;
    max_price?: number;
}

type Props = {
    onFilter: Function
}

export default function Filter({ onFilter }: Props) {

    const [formData, setFormData] = useState<FormData>({

    })

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        onFilter(formData.min_price || 0, formData.max_price || Number.MAX_VALUE)
        console.log(formData.min_price || 0);
        console.log(formData.max_price || Number.MAX_VALUE);
    }

    return (
        <div className='de4-container de4-main' >
            <form className='de4-filter-form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={formData.min_price || ''}
                    name="min_price"
                    placeholder='Preço mínimo'
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    value={formData.max_price}
                    name="max_price"
                    placeholder='Preço máximo'
                    onChange={handleInputChange || ''}
                />
                <button type='submit'>
                    Filtrar
                </button>
            </form>
        </div>
    )
}
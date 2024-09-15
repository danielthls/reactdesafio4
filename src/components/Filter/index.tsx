import './styles.css'

export default function Filter() {
    return (
        <div className='de4-container de4-main' >
            <form className='de4-filter-form'>
                <input
                    type="text"
                    name="min-value"
                    placeholder='Preço mínimo'
                />
                <input
                    type="text"
                    name="max-value"
                    placeholder='Preço máximo'
                />
                <button>
                    Filtrar
                </button>
            </form>
        </div>
    )
}
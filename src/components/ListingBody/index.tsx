import { useEffect, useState } from "react";
import Filter from "../Filter";
import Listing from "../Listing";
import { ProductDTO } from "../../models/Product";
import * as productService from '../../services/product-service'

type QueryParams = {
    minPrice: number;
    maxPrice: number;
}

export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [queryParams, setQueryParam] = useState<QueryParams>({
        minPrice: 0,
        maxPrice: Number.MAX_VALUE
    });

    useEffect(() => {
        setProducts(productService.findByPrice(queryParams.minPrice, queryParams.maxPrice))
    }, [])

    return (
        <main>
            <Filter />
            <Listing products={products} />
        </main>
    )
}
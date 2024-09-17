import { useContext, useEffect, useState } from "react";
import Filter from "../Filter";
import Listing from "../Listing";
import { ProductDTO } from "../../models/Product";
import * as productService from '../../services/product-service'
import { ContextProductCount } from "../../utils/context-product-count";

type QueryParams = {
    minPrice: number;
    maxPrice: number;
}

export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const { setContextProductCount } = useContext(ContextProductCount)

    const [queryParams, setQueryParam] = useState<QueryParams>({
        minPrice: 0,
        maxPrice: Number.MAX_VALUE
    });

    function handleFilter(minPrice: number, maxPrice: number) {
        setProducts([]);
        setQueryParam({ ...queryParams, minPrice: minPrice, maxPrice: maxPrice })
    }

    useEffect(() => {
        setProducts(productService.findByPrice(queryParams.minPrice, queryParams.maxPrice))
        setContextProductCount(productService.findByPrice(queryParams.minPrice, queryParams.maxPrice).length)
    }, [queryParams])

    return (
        <main>
            <Filter onFilter={handleFilter} />
            <Listing products={products} />
        </main>
    )
}
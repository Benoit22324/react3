import { Title } from "@atoms/Title"
import { ProductView } from "@molecules/ProductView/ProductView"
import { Product, useCartStore } from "@store/useCartStore"

export const ProductsPage = () => {
    const { cart } = useCartStore();
    const ProductsList = [
        {id: 1, name: "Lait"},
        {id: 2, name: "Pain"},
        {id: 3, name: "Orange"},
        {id: 4, name: "Canapé"},
    ];
    console.log(cart)

    return <>
        <Title label="Products Page" />
        {
            ProductsList.map((product: Product) => <ProductView key={product.id} productData={product} />)
        }
    </>
}
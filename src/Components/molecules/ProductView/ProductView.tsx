import { Button } from "@atoms/Button"
import { Title } from "@atoms/Title"
import { Product, useCartStore } from "@store/useCartStore"
import { useState } from "react"

type ProductViewProps = {
    productData: Product
}

export const ProductView = ({ productData }: ProductViewProps) => {
    const { addItem, removeItem } = useCartStore();
    const [ added, setAdded ] = useState(false);

    const handleCart = () => {
        if (added) removeItem(productData.id);
        else addItem(productData);

        setAdded(!added);
    }

    return <>
        <div>
            <Title label={productData.name} />
            {
                added ? <Button label="Remove from Cart" handleClick={handleCart} />
                : <Button label="Add to Cart" handleClick={handleCart} />
            }
        </div>
    </>
}
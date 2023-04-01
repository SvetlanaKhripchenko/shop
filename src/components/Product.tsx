import { ProductType } from "../context/ProductsProvider"
import { ReducerActionType, ReducerAction } from "../context/CartProvider"
import { ReactElement, memo } from "react"

type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean,
}

const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsType): ReactElement => {

    const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href
    console.log(img)

    const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } })

    const itemInCart = inCart ? ' → В корзине ✔️' : null

    const content =
        <article className="product">
            <img src={product.img} alt={product.name} className="product__img" />
            <h3>{product.name}</h3>
            <p>Штрихкод: {product.code}</p>
            <p>Производитель: {product.manufacturer}</p>
            <p>Бренд: {product.brand}</p>
            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'KZT' }).format(product.price)}{itemInCart}</p>
            <button style={{
                color: 'white',
                fontWeight: '700',
                fontSize: '10px',
                borderRadius: '80px',
                border: 'none',
                background: '#FFC85E',
                padding: '16px 25px',
                cursor: 'pointer'

            }} onClick={onAddToCart}>В КОРЗИНУ</button>
        </article>

    return content
}

function areProductsEqual({ product: prevProduct, inCart: prevInCart }: PropsType, { product: nextProduct, inCart: nextInCart }: PropsType) {
    return (
        Object.keys(prevProduct).every(key => {
            return prevProduct[key as keyof ProductType] ===
                nextProduct[key as keyof ProductType]
        }) && prevInCart === nextInCart
    )
}
const MemoizedProduct = memo<typeof Product>(Product, areProductsEqual)

export default MemoizedProduct
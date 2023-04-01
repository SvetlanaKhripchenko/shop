import useCart from "../hooks/useCart"

type PropsType = {
    viewCart: boolean,
}

const Footer = ({ viewCart }: PropsType) => {
    const { totalItems, totalPrice } = useCart()

    const year: number = new Date().getFullYear()

    const pageContent = viewCart
        ? <p>Shopping Cart &copy; {year}</p>
        : (
            <>
                <p>Всего товаров: {totalItems}</p>
                <p>Общая сумма: {totalPrice}</p>
                <p>СУЛТАН &copy; {year}</p>
            </>
        )

    const content = (
        <footer className="footer">
            {pageContent}
        </footer>
    )

    return content
}
export default Footer
type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}

const Nav = ({ viewCart, setViewCart }: PropsType) => {

    const button = viewCart
        ? <button onClick={() => setViewCart(false)}>Смотреть каталог</button>
        : <button style={{
            border: 'none',
            background: 'none',
            cursor: 'pointer',

        }} onClick={() => setViewCart(true)}><img src="Korzina.png" alt="" /></button>
    const content = (
        <nav className="nav">
            {button}
        </nav>
    )

    return content
}
export default Nav
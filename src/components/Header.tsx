import Nav from "./Nav"
import useCart from "../hooks/useCart"

type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({ viewCart, setViewCart }: PropsType) => {
    const { totalItems, totalPrice } = useCart()

    const content = (
        <header className="header">
            <div className="header__title-bar">
                <img style={{width: '49px', height: '66px'}} src="Vector.png" alt="" />
                <h1 style={{
                    marginTop: '16px',
                }}>СУЛТАН</h1>
                <p
                style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    padding: '21px 54px',
                    background: '#FFC85E',
                    borderRadius: '79px',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',

                }}
                >Каталог</p>
                <input type="search" placeholder="Поиск..." 
                style={{
                    background: '#EDEDED',
                    borderRadius: '36px',
                    outline: 'none',
                    border: 'none',
                    paddingLeft: '20px',

                }}
                />
                <div>
                    <p style={{
                        fontWeight: '600',
                        fontSize: '14px',
                        textAlign: 'right',
                    }}>+7 (777) 490-00-91</p>
                    <p style={{
                        fontWeight: '300',
                        fontSize: '12px',
                        color: '#3F4E65',
                        textAlign: 'right',
                        marginTop: '5px',
                        marginBottom: '5px',
                    }}>время работы: 9:00-20:00</p>
                    <p style={{
                        fontWeight: '300',
                        fontSize: '12px',
                        color: '#3F4E65',
                        textAlign: 'right',
                    }}>Заказать звонок</p>
                </div>
                <div><img style={{height: '60px',}} src="Group100.png" alt="Связаться с консультантом" /></div>
                <p
                style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    padding: '21px 54px',
                    background: '#FFC85E',
                    borderRadius: '79px',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',

                }}
                >Прайс-лист</p>
                <Nav viewCart={viewCart} setViewCart={setViewCart} />   
                <div style={{
                    marginLeft: '-50px'
                }} className="header__price-box">
                    <p style={{
                        color: 'white',
                        borderRadius: '50px',
                        background: 'orange',
                        width: '30px',
                        textAlign: 'center',
                        fontWeight: '700'
                    }}>{totalItems}</p>
                    <p style={{
                        fontWeight: '600',
                        fontSize: '14px'
                    }}>{totalPrice}</p>
                </div>
             
            </div>
            
        </header>
    )

    return content
}
export default Header
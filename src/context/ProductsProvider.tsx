import { url } from "inspector"
import { createContext, ReactElement, useState, useEffect } from "react"
import { URL } from "url"

export type ProductType = {
    sku: string,
    name: string,
    price: number,
    code: string,
    manufacturer: string,
    brand: string,
    img: string
}

// const initState: ProductType[] = []
const initState: ProductType[] = [
    {
        "sku": "item0001",
        "name": "AOS средство для мытья посуды Crystal",
        "price": 48.76,
        "code": "9876789",
        "manufacturer": "Нэфис",
        "brand": "AOS",
        "img": "Aos.jpg"
    },
    {
        "sku": "item0002",
        "name": "ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник",
        "price": 48.76,
        "code": "9876789",
        "manufacturer": "Нэфис",
        "brand": "AOS",
        "img": "Ariel.jpg"
    },
    {
        "sku": "item0003",
        "name": "BIMAX Порошок стиральный Автомат 100 пятен COMPACT",
        "price": 48.76,
        "code": "9876789",
        "manufacturer": "Нэфис",
        "brand": "AOS",
        "img": 'Bimax.jpg'
    },
    {
        "sku": "item0004",
        "name": "AOS средство для мытья посуды Crystal",
        "price": 48.76,
        "code": "9876789",
        "manufacturer": "Нэфис",
        "brand": "AOS",
        "img": 'Aos.jpg'
    },
    {
        "sku": "item0005",
        "name": "ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник",
        "price": 48.76,
        "code": "9876789",
        "manufacturer": "Нэфис",
        "brand": "AOS",
        "img": 'Ariel.jpg'
    },
    {
        "sku": "item0006",
        "name": "BIMAX Порошок стиральный Автомат 100 пятен COMPACT",
        "price": 48.76,
        "code": "9876789",
        "manufacturer": "Нэфис",
        "brand": "AOS",
        "img": 'Bimax.jpg'
    },
    {
        "sku": "item0007",
        "name": "AOS средство для мытья посуды Crystal",
        "price": 48.76,
        "code": "9876789",
        "manufacturer": "Нэфис",
        "brand": "AOS",
        "img": 'Aos.jpg'
    },
    {
        "sku": "item0008",
        "name": "ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник",
        "price": 48.76,
        "code": "9876789",
        "manufacturer": "Нэфис",
        "brand": "AOS",
        "img": 'Ariel.jpg'
    },
    {
        "sku": "item0009",
        "name": "BIMAX Порошок стиральный Автомат 100 пятен COMPACT",
        "price": 48.76,
        "code": "9876789",
        "manufacturer": "Нэфис",
        "brand": "AOS",
        "img": 'Bimax.jpg'
    },
    {
        "sku": "item0010",
        "name": "AOS средство для мытья посуды Crystal",
        "price": 48.76,
        "code": "9876789",
        "manufacturer": "Нэфис",
        "brand": "AOS",
        "img": 'Aos.jpg'
    },
    {
        "sku": "item0011",
        "name": "ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник",
        "price": 48.76,
        "code": "9876789",
        "manufacturer": "Нэфис",
        "brand": "AOS",
        "img": 'Ariel.jpg'
    },
    {
        "sku": "item0012",
        "name": "BIMAX Порошок стиральный Автомат 100 пятен COMPACT",
        "price": 48.76,
        "code": "9876789",
        "manufacturer": "Нэфис",
        "brand": "AOS",
        "img": 'Bimax.jpg'
    },
    {
        "sku": "item0013",
        "name": "AOS средство для мытья посуды Crystal",
        "price": 48.76,
        "code": "9876789",
        "manufacturer": "Нэфис",
        "brand": "AOS",
        "img": 'Aos.jpg'
    },
    {
        "sku": "item0014",
        "name": "ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник",
        "price": 48.76,
        "code": "9876789",
        "manufacturer": "Нэфис",
        "brand": "AOS",
        "img": 'Ariel.jpg'
    },
    {
        "sku": "item0015",
        "name": "BIMAX Порошок стиральный Автомат 100 пятен COMPACT",
        "price": 48.76,
        "code": "9876789",
        "manufacturer": "Нэфис",
        "brand": "AOS",
        "img": 'Bimax.jpg'
    },
    {
        "sku": "item0016",
        "name": "AOS средство для мытья посуды Crystal",
        "price": 48.76,
        "code": "9876789",
        "manufacturer": "Нэфис",
        "brand": "AOS",
        "img": 'Aos.jpg'
    },
    {
        "sku": "item0017",
        "name": "ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник",
        "price": 48.76,
        "code": "9876789",
        "manufacturer": "Нэфис",
        "brand": "AOS",
        "img": 'Ariel.jpg'
    },
    {
        "sku": "item0018",
        "name": "BIMAX Порошок стиральный Автомат 100 пятен COMPACT",
        "price": 48.76,
        "code": "9876789",
        "manufacturer": "Нэфис",
        "brand": "AOS",
        "img": 'Bimax.jpg'
    }
]

export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: [] }

const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState)

    // useEffect(() => {
    //     const fetchProducts = async (): Promise<ProductType[]> => {
    //         const data = await fetch('http://localhost:3500/products').then(res => {
    //             return res.json()
    //         }).catch(err => {
    //             if (err instanceof Error) console.log(err.message)
    //         })
    //         return data
    //     }

    //     fetchProducts().then(products => setProducts(products))
    // }, [])

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )

}

export default ProductsContext 

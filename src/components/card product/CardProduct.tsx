import { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import { iCart, iDataContext, iProduct } from "../../types/interfaces";
import { ContainerCardProduct } from "./CardProduct-styled";

interface iCardProduct  {
    products: Array<iProduct>
}

const CardProduct = ({ products }:iCardProduct): JSX.Element => {

    const { state, dispatch } = useContext(DataContext)

    function addProductToCart(product: iProduct){
        dispatch({type:'cart', payload: [
            ... state.cart, {id: product.id, name: product.name, price: product.price, img: product.img},
        ]
        })
    }

    function favoriteProduct(product: iProduct){
        dispatch({type:'favoriteProducts', payload: [
            ... state.favoriteProducts, {id: product.id, name: product.name, price: product.price, img: product.img},
        ]
        })
    }

    return(
    <ContainerCardProduct colorMain={state.themePage.colorMain}>
        {products.length !== 0 ? 
        (products.map( (product: iProduct, index:number) => {
        const moneyFull = (product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
         
        return(
            <div key={index} className="card">
                <div className="img-product">
                    <img src={product.img} alt="" loading="lazy" />
                </div>
                <div className="info-card">
                    <h4 className="name-product-card">{product.name}</h4>
                    <h4 className="info-product">{product.description}</h4>
                    <p className="price-card">{moneyFull.split(',')[0]}<b>,{moneyFull.split(',')[1]}</b></p>
                    <button className="btn-add" 
                    onClick={()=>addProductToCart(product)}>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.28571 11.5714V6.28571M6.28571 6.28571V1M6.28571 6.28571H11.5714M6.28571 6.28571H1" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                    </button>
                    <button onClick={()=>favoriteProduct(product)} className="btn-favorite">
                        <svg viewBox="0 0 24 24" width="34" height="34" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
                </div>
            </div>
        )}))
        :
        (<h4>Nenhum item encontrado</h4>)
        }
    </ContainerCardProduct>
    )
}



export default CardProduct;
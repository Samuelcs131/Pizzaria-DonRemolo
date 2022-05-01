import { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import { iListProducts } from "../../types/interfaces";
import { ContainerCardProduct } from "./CardProduct-styled";

interface iCardProduct  {
    products: Array<iListProducts>
}

const CardProduct = ({ products }:iCardProduct): JSX.Element => {

    const { state } = useContext(DataContext)

    //console.log(products)
 
    return(
    <ContainerCardProduct colorMain={state.themePage.colorMain}>
        {products.length !== 0 ? 
        (products.map( (product: iListProducts, index:number) => {
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
                    <button className="btn-add">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.28571 11.5714V6.28571M6.28571 6.28571V1M6.28571 6.28571H11.5714M6.28571 6.28571H1" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
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
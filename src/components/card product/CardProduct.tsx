import Image from "next/image";
import { ContainerCardProduct } from "./CardProduct-styled";

const products:any = [
    {name: 'Pizza muzzarella',price: 2000, img: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {name: 'Pizza muzzarella',price: 2000, img: 'https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
    {name: 'Pizza muzzarella',price: 2000, img: 'https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
    {name: 'Pizza muzzarella',price: 2000, img: 'https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
    {name: 'Pizza muzzarella',price: 2000, img: 'https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
    {name: 'Pizza muzzarella',price: 2000, img: 'https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
    {name: 'Pizza muzzarella',price: 2000, img: 'https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
    {name: 'Pizza muzzarella',price: 2000, img: 'https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
    {name: 'Pizza muzzarella',price: 2000, img: 'https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
    {name: 'Pizza muzzarella',price: 2000, img: 'https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
    {name: 'Pizza muzzarella',price: 2000, img: 'https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
    {name: 'Pizza muzzarella',price: 2000, img: 'https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'}
]

const CardProduct = () => {
    return(
    <ContainerCardProduct>
        {products.lenght !== 0 ? 
        (products.map( (product: any, index:number) => {return(
        
        <div key={index} className="card">
            <img src={product.img} alt="" />
            <div className="info-card">
                <h4 className="name-product-card">{product.name}</h4>
                <p className="price-card">$ {product.price}<span>o</span></p>
                <button className="btn-add">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.28571 11.5714V6.28571M6.28571 6.28571V1M6.28571 6.28571H11.5714M6.28571 6.28571H1" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                </button>
                
            </div>
        </div>
        )}))
        :
        (<h4>Não há nada</h4>)
        }
    </ContainerCardProduct>
    )
}

export default CardProduct;
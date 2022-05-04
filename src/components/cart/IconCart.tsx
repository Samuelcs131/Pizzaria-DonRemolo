import { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../store/GlobalState";
import { ContainerCart } from "./IconCart-styled";
import { iCart, iDataContext } from '../../types/interfaces' 

const IconCart = () => {

    const containerMenu = useRef<HTMLDivElement>(null)
    const { state, dispatch } = useContext<iDataContext>(DataContext)
    const [itemCart, setItemCart] = useState<Number>(0);

    // TOTAL PRODUCTS
    const [freight, setFreight] = useState<string>('0');
    const [amount, setAmount] = useState<string>('R$ 0,00');

    // ACTIVE MENU CART
    function activeMenu(){
        containerMenu.current?.classList.toggle('active')
    }
    // REMOVE PRODUCT CART
    function removeProductCart(idProduct: string | undefined){
        dispatch({type:'cart', 
            payload: state.cart?.filter( (product:iCart) => product.id !== idProduct)
        })
    }
    // CLEAR CART
    function clearCart(){
        dispatch({type:'cart', 
            payload: []
        })
    }
    // NUMBER ITEMS CART
    useEffect(()=>{
        setItemCart(Number(state.cart?.length)) 

        // AMOUNT AND FREIGHT
        if(state.cart?.length !== 0){
            let freig:number = (Number(state.cart?.length) * 7)

            setFreight(freig.toLocaleString('pt-BR', 
            { style: 'currency', currency: 'BRL' }))

            let amountProducts:number = state.cart?.reduce( (prevValue: any, currentValue: iCart) => prevValue + currentValue.price ,0 )

            setAmount((amountProducts+freig).toLocaleString('pt-BR', 
            { style: 'currency', currency: 'BRL' }))
        } else {
            setFreight('R$ 0,00')
            setAmount('R$ 0,00')
        }
    })

    return(
    <ContainerCart>
        <div className="container-quantity-items" onClick={()=>activeMenu()}>
            {itemCart !== 0 && <span className="quantity-items">{itemCart}</span>}
            <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#A6A6A6"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 9h-4.79l-4.39-6.57c-.4-.59-1.27-.59-1.66 0L6.77 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM11.99 4.79L14.8 9H9.18l2.81-4.21zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/><title>Carrinho</title></svg>
        </div>

        <div ref={containerMenu} className="cart-sidebar">
            <svg onClick={()=>activeMenu()} width="16" height="16" className="btn-close-sidebar"  viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.292492 0.305288C0.479831 0.117817 0.733884 0.0125018 0.998781 0.0125018C1.26368 0.0125018 1.51773 0.117817 1.70507 0.305288L5.99375 4.59829L10.2824 0.305288C10.3746 0.209778 10.4848 0.133596 10.6067 0.0811869C10.7286 0.0287779 10.8597 0.00119157 10.9923 3.77571e-05C11.125 -0.00111606 11.2565 0.0241854 11.3793 0.0744663C11.5021 0.124747 11.6136 0.199 11.7074 0.292893C11.8012 0.386786 11.8754 0.498438 11.9256 0.621334C11.9758 0.74423 12.0011 0.87591 12 1.00869C11.9988 1.14147 11.9713 1.27269 11.9189 1.39469C11.8665 1.5167 11.7904 1.62704 11.695 1.71929L7.40633 6.01229L11.695 10.3053C11.877 10.4939 11.9777 10.7465 11.9754 11.0087C11.9731 11.2709 11.8681 11.5217 11.6828 11.7071C11.4976 11.8925 11.2471 11.9977 10.9851 12C10.7232 12.0022 10.4709 11.9014 10.2824 11.7193L5.99375 7.42629L1.70507 11.7193C1.51666 11.9014 1.26431 12.0022 1.00238 12C0.740443 11.9977 0.489883 11.8925 0.304661 11.7071C0.11944 11.5217 0.0143761 11.2709 0.0121 11.0087C0.00982384 10.7465 0.110517 10.4939 0.292492 10.3053L4.58118 6.01229L0.292492 1.71929C0.10521 1.53176 0 1.27745 0 1.01229C0 0.747124 0.10521 0.492816 0.292492 0.305288V0.305288Z" fill="#616161"/>
            </svg>
            {/* HEADER CART SIDEBAR */}
            <h2 className="title">Meu pedido</h2>

            <div className="info-and-remove">
                <div className="group-info">
                    <h4>Lista de pedido</h4>
                    <span>{itemCart <= 1 ? `${itemCart} item` : `${itemCart} itens`}</span>
                </div>
                {/* CLEAR CART */}
                <svg onClick={()=>clearCart()} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.8 4.80132H16.8V2.79746C16.7718 2.0293 16.4402 1.30363 15.8779 0.779551C15.3155 0.255468 14.5683 -0.0242725 13.8 0.00165401H10.2C9.43171 -0.0242725 8.68447 0.255468 8.12212 0.779551C7.55975 1.30363 7.22815 2.0293 7.2 2.79746V4.80132H1.2C0.88174 4.80132 0.576515 4.92774 0.351472 5.15277C0.126428 5.3778 0 5.683 0 6.00124C0 6.31948 0.126428 6.62468 0.351472 6.84971C0.576515 7.07474 0.88174 7.20116 1.2 7.20116H2.4V20.4002C2.4 21.355 2.77928 22.2706 3.45442 22.9457C4.12955 23.6207 5.04522 24 6 24H18C18.9548 24 19.8705 23.6207 20.5456 22.9457C21.2207 22.2706 21.6 21.355 21.6 20.4002V7.20116H22.8C23.1183 7.20116 23.4235 7.07474 23.6485 6.84971C23.8736 6.62468 24 6.31948 24 6.00124C24 5.683 23.8736 5.3778 23.6485 5.15277C23.4235 4.92774 23.1183 4.80132 22.8 4.80132ZM9.6 16.8005C9.6 17.1187 9.47357 17.4239 9.24853 17.649C9.02348 17.874 8.71826 18.0004 8.4 18.0004C8.08174 18.0004 7.77652 17.874 7.55147 17.649C7.32643 17.4239 7.2 17.1187 7.2 16.8005V12.0008C7.2 11.6826 7.32643 11.3774 7.55147 11.1524C7.77652 10.9273 8.08174 10.8009 8.4 10.8009C8.71826 10.8009 9.02348 10.9273 9.24853 11.1524C9.47357 11.3774 9.6 11.6826 9.6 12.0008V16.8005ZM9.6 2.79746C9.6 2.60547 9.852 2.40149 10.2 2.40149H13.8C14.148 2.40149 14.4 2.60547 14.4 2.79746V4.80132H9.6V2.79746ZM16.8 16.8005C16.8 17.1187 16.6736 17.4239 16.4485 17.649C16.2235 17.874 15.9183 18.0004 15.6 18.0004C15.2817 18.0004 14.9765 17.874 14.7515 17.649C14.5264 17.4239 14.4 17.1187 14.4 16.8005V12.0008C14.4 11.6826 14.5264 11.3774 14.7515 11.1524C14.9765 10.9273 15.2817 10.8009 15.6 10.8009C15.9183 10.8009 16.2235 10.9273 16.4485 11.1524C16.6736 11.3774 16.8 11.6826 16.8 12.0008V16.8005Z" fill="#353535"/>
                </svg>
            </div>
            {/* PRODUCTS CONTAINER */}
            <div className="products-container">
                {state.cart?.length !== 0 ?
                (state.cart?.map( (product:iCart, index:number)=>{
                
                    const priceProduct:string|undefined = 
                    product.price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

                    return(
                    <div key={index} className="product-cart">
                    <img src={product.img} alt="" />
                    <div className="product-info">
                        <div className="group-text-and-icon">
                            <div className="group-text">
                                <p>{product.name}</p>
                                <span>{priceProduct?.split(',')[0]}<b>,{priceProduct?.split(',')[1]}</b></span>
                            </div>

                            {/* REMOVE PRODUCT CART */}
                            <svg onClick={()=>removeProductCart(product.id)} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.292492 0.305288C0.479831 0.117817 0.733884 0.0125018 0.998781 0.0125018C1.26368 0.0125018 1.51773 0.117817 1.70507 0.305288L5.99375 4.59829L10.2824 0.305288C10.3746 0.209778 10.4848 0.133596 10.6067 0.0811869C10.7286 0.0287779 10.8597 0.00119157 10.9923 3.77571e-05C11.125 -0.00111606 11.2565 0.0241854 11.3793 0.0744663C11.5021 0.124747 11.6136 0.199 11.7074 0.292893C11.8012 0.386786 11.8754 0.498438 11.9256 0.621334C11.9758 0.74423 12.0011 0.87591 12 1.00869C11.9988 1.14147 11.9713 1.27269 11.9189 1.39469C11.8665 1.5167 11.7904 1.62704 11.695 1.71929L7.40633 6.01229L11.695 10.3053C11.877 10.4939 11.9777 10.7465 11.9754 11.0087C11.9731 11.2709 11.8681 11.5217 11.6828 11.7071C11.4976 11.8925 11.2471 11.9977 10.9851 12C10.7232 12.0022 10.4709 11.9014 10.2824 11.7193L5.99375 7.42629L1.70507 11.7193C1.51666 11.9014 1.26431 12.0022 1.00238 12C0.740443 11.9977 0.489883 11.8925 0.304661 11.7071C0.11944 11.5217 0.0143761 11.2709 0.0121 11.0087C0.00982384 10.7465 0.110517 10.4939 0.292492 10.3053L4.58118 6.01229L0.292492 1.71929C0.10521 1.53176 0 1.27745 0 1.01229C0 0.747124 0.10521 0.492816 0.292492 0.305288V0.305288Z" fill="#616161"/>
                            </svg>
                        </div>
                        <select name="" id="" defaultValue={0}>
                            <option value="0">1</option>
                        </select>
                    </div>
                </div>
                    )
                }))
                :
                (<h1>Não há produtos</h1>)}
            </div>

            {/* FINALIZE ORDER */}
            <div className="finalize-order">
                <div className="group-text-and-value">
                    <div className="shipping-fee">
                        <p>Envio</p>
                        <p>{freight.split(',')[0]}<b>,{freight.split(',')[1]}</b></p>
                    </div>
                    <div className="total-value">
                        <p>Total itens</p>
                        <p>{amount?.split(',')[0]}<b>,{amount?.split(',')[1]}</b></p>
                    </div>
                </div>
                <button>
                    Finalizar pedido
                </button>
            </div>
        </div>
    </ContainerCart>
    )
}

export default IconCart;
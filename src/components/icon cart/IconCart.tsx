import { useState } from "react";
import { ContainerIconCart } from "./IconCart-styled";

const IconCart = () => {

    const [itemCart, setItemCart] = useState<Number>(1);

    return(
    <ContainerIconCart>
        {itemCart !== 0 && <span className="quantity-itens">{itemCart}</span>}
        <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#A6A6A6"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 9h-4.79l-4.39-6.57c-.4-.59-1.27-.59-1.66 0L6.77 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM11.99 4.79L14.8 9H9.18l2.81-4.21zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/><title>Carrinho</title></svg>
    </ContainerIconCart>)
}

export default IconCart;
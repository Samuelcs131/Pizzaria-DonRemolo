import styled from "styled-components";
import { themeLight } from "../../styles/PalletColors";

export const ContainerCart = styled.div`
    position: relative;
    
    /* CART ICON */
    .quantity-itens{
        cursor: pointer;
        position: absolute;
        right: -2px;
        top: 5px;
        width: 15px;
        height: 15px;
        background-color: ${themeLight.gray900};
        font-size: 10px;
        color: ${themeLight.white};
        display: grid;
        place-items: center;
        border-radius: 50%;
        font-weight: 600;
        user-select: none;
    }

    /* CART SIDEBAR */
    .cart-sidebar{
        position: fixed;
        padding: 25px;
        top: 0px;
        right: 17px;
        z-index: 10;
        background-color: #F6F6F6;
        width: 440px;
        height: 100vh;
        transform: translateX(105%);
        transition: transform .3s;
        display: flex;
        flex-direction: column;

        /* HEARDER SIDEBAR */
        .title{
            font-weight: 700;
            font-size: 26px;
            margin-bottom: 25px;
        }
        .info-and-remove{
            display: flex;
            justify-content: space-between;
            margin-bottom: 25px;

            .group-info{
                h4{
                    font-weight: 600;
                    font-size: 20px;
                }
                span{
                    font-weight: 500;
                    font-size: 16px;
                }
            }
        }
        /* PRODUCTS CONTAINER */
        .products-container{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 20px;
            height: 100%;

            .product-cart{
                height: 135px;
                background-color: white;
                border-radius: 16px;
                width: 100%;
                padding: 12px;
                display: flex;
                gap: 15px;

                img{
                    width: 110px;
                    height: 110px;
                    object-fit: cover;
                    flex-shrink: 0;
                    border-radius: 16px;
                }
                .product-info{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 100%;
                    .group-text-and-icon{
                        display: flex;
                        justify-content: space-between;
                        svg{ margin: 5px; }
                        .group-text{
                            p{
                                font-weight: 500;
                                font-size: 16px;
                            }
                            span{
                                font-weight: 500;
                                font-size: 16px;
                                b{ font-size: 12px; font-weight: 500; }
                            }
                        }
                    }
                    select{
                        flex-shrink: 0;
                    }
                }
            }
        }
    
        /* FINALIZE ORDER */
        .finalize-order{
            flex-shrink: 0;

        }
    }
    /* CART SIDEBAR ACTIVE */
    .cart-sidebar.active{
        transform: translateX(0%);
        .group-text-and-value{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: 15px;
            .shipping-fee{
                display: flex;
                justify-content: space-between;
                font-weight: 600;
                p:nth-child(1){
                    font-size: 14px;
                }
                p:nth-child(2){
                    font-size: 16px;
                    b{ font-size: 10px;}
                }
            }
            .total-value{
                display: flex;
                justify-content: space-between;
                font-weight: 700;
                p:nth-child(1){
                    font-weight: 700;
                    font-size: 16px; 
                }
                p:nth-child(2){
                    font-weight: 700;
                    font-size: 18px;
                    b{ font-size: 12px; }
                }
            }
        } 
        button{
            height: 60px;
            width: 100%;
            border-radius: 50px;
            background-color: #5C5C5C;
            text-align: center;
            font-weight: 600;
            font-size: 18px;
            color: white;
            cursor: pointer;
        }
    }
`
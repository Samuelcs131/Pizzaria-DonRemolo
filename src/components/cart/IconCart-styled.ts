import styled from "styled-components";
import { iIconCart } from "../../types/interfaces";

export const ContainerCart = styled.div<iIconCart>`
    position: relative;
    
    /* CART ICON */
    .container-quantity-items{
        svg {
            fill: ${({theme})=>theme.text.secundary};
        }
        .quantity-items{
            cursor: pointer;
            position: absolute;
            right: -2px;
            top: 5px;
            width: 15px;
            height: 15px;
            background-color: ${({theme})=>theme.text.primary};
            font-size: 10px;
            color: ${({theme})=>theme.background.primary};
            display: grid;
            place-items: center;
            border-radius: 50%;
            font-weight: 600;
            user-select: none;
        }
    }

    /* CART SIDEBAR */
    .cart-sidebar{
        position: fixed;
        padding: 25px;
        top: 0px; 
        right: -780px;
        z-index: 1001;
        background-color: ${({theme})=>theme.background.secundary};
        width: 440px;
        height: 100vh; 
        transition: right .3s;
        display: flex;
        flex-direction: column;

        /* HEARDER SIDEBAR */
        .title{
            font-weight: 700;
            font-size: 26px;
            margin-bottom: 25px;
            color: ${({theme})=>theme.text.primary};
        }
        .info-and-remove{
            display: flex;
            justify-content: space-between;
            margin-bottom: 25px;

            svg path{
                fill: ${({theme})=>theme.text.primary};
            }

            .group-info{
                h4{
                    font-weight: 600;
                    font-size: 20px;
                    color: ${({theme})=>theme.text.primary};
                }
                span{
                    font-weight: 500;
                    font-size: 16px;
                    color: ${({theme})=>theme.text.secundary};
                }
            }
        }
        /* PRODUCTS CONTAINER */
        .products-container{
            display: flex;
            flex-direction: column;
            gap: 20px;
            height: 100%;
            overflow-y: auto;
            padding-right: 10px;
            margin-bottom: 5px;

                /* SCROLL */
                ::-webkit-scrollbar{
                    width: 8px;
                }
                ::-webkit-scrollbar-track{
                    background-color: transparent;
                }

                ::-webkit-scrollbar-thumb{
                    background-color: ${({theme})=>theme.text.secundary};
                    border-radius: 5px;
                }

            .product-cart{
                height: 135px;
                background-color: ${({theme})=>theme.background.primary};
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
                        svg{ 
                            margin: 5px; 
                            path{ fill: ${({theme})=>theme.text.primary};}
                        }
                        .group-text{
                            p{
                                font-weight: 500;
                                font-size: 16px;
                                color: ${({theme})=>theme.text.primary};
                            }
                            span{
                                font-weight: 500;
                                font-size: 16px;
                                color: ${({theme})=>theme.text.primary};
                                b{ font-size: 12px; font-weight: 500; }
                            }
                        }
                    }
                    select{
                        flex-shrink: 0;
                        width: 50px;
                        color: ${({theme})=>theme.text.primary};
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
        right: 0px;

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
                    color: ${({theme})=>theme.text.secundary};
                }
                p:nth-child(2){
                    font-size: 16px;
                    color: ${({theme})=>theme.text.primary};
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
                    color: ${({theme})=>theme.text.secundary};
                }
                p:nth-child(2){
                    font-weight: 700;
                    font-size: 18px;
                    color: ${({theme})=>theme.text.primary};
                    b{ font-size: 12px; }
                }
            }
        } 
        button{
            height: 60px;
            width: 100%;
            border-radius: 50px;
            background-color: ${({theme})=>theme.text.secundary};
            text-align: center;
            font-weight: 600;
            font-size: 18px;
            color: ${({theme})=>theme.background.primary};
            cursor: pointer;
        }
    }

    @media screen and (max-width: 767px) {
       /* CART SIDEBAR */
        .cart-sidebar{
            width: 100%;
            
        }
    }
`
import styled from "styled-components"; 
import { iCardProduct } from "../../types/interfaces";


export const ContainerCardProduct = styled.div<iCardProduct>` 
    width: 100%; 
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
    flex-shrink: 0;
    margin-bottom: 30px; 

    h4{
        color:  ${({theme})=>theme.text.primary};
    }
     
    .card{
        transition: height .5s;
        height: 100%;
        box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        background-color: ${({theme})=>theme.background.tertiary};
        border: 1px solid ${({theme})=>theme.background.secundary}; 

        .img-product{
            height: 160px;
            overflow: hidden;
            
        }
        img{
            height: 160px;
            width: 100%;
            object-fit: cover;
            flex-shrink: 0;
            transition: transform .3s;
            user-select: none;

            &:hover{
                transform: scale(1.1);
                transition: transform .3s;
            }
        }

        .info-card{
            position: relative;
            padding: 13px;
            //height: 100%;
            
            .name-product-card{
                font-weight: 500;
                font-size: 16px;
                color: ${({theme})=>theme.text.primary};
            }

            .info-product{
                font-size: 13px;
                font-weight: 300;
                color: ${({theme})=>theme.text.secundary};
                margin: 5px 0;
            }

            .price-card{
                font-weight: 600;
                font-size: 16px;
                color: ${({colorMain})=>colorMain}; 
                b{
                    font-weight: 600;
                    font-size: 12px;
                }
            }
            
            .btn-add{
                position: absolute;
                right: 10px;
                bottom: 10px;
                border: 1px solid ${({theme})=>theme.text.secundary};
                width: 35px;
                height: 35px;
                border-radius: 13px;
                cursor: pointer;
                transition: .2s background-color;
                svg path{
                    stroke: ${({theme})=>theme.text.secundary};
                }

                &:hover{
                    background-color: ${({theme})=>theme.text.primary};;
                    transition: .2s background-color;
                    border-color: ${({theme})=>theme.background.secundary};;
                    svg path{
                        stroke: ${({theme})=>theme.background.secundary};
                    }
                }
                
            }
        }

        
    }
 

`
import styled from "styled-components";
import { themeLight } from "../../styles/PalletColors";

export const ContainerCardProduct = styled.div` 
    width: 100%; 
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
    flex-shrink: 0;
    margin-bottom: 30px;
    
    .card{ 
        height: 263px; 
        box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        overflow: hidden;
        display: flex;
        flex-direction: column;

        img{
            height: 160px;
            width: 100%;
            object-fit: cover;
            flex-shrink: 0;
        }

        .info-card{
            position: relative;
            padding: 13px;
            height: 100%;
            
            .name-product-card{
                font-weight: 500;
                font-size: 16px;
            }

            .price-card{
                font-weight: 600;
                font-size: 16px;
            }
            
            .btn-add{
                position: absolute;
                right: 10px;
                bottom: 10px;
                border: 1px solid #D2D2D2;
                width: 40px;
                height: 40px;
                border-radius: 13px;
                cursor: pointer;
                transition: .2s background-color;

                &:hover{
                    background-color: black;
                    transition: .2s background-color;
                    svg path{
                        stroke: white;
                    }
                }
                
            }
        }

    }

`
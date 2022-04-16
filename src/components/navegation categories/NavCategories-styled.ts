import styled from "styled-components"; 
import { iColorMain } from "../../types/interfaces";



export const ContainerNavCategories = styled.nav<iColorMain>`
    padding: 10px 0;
    overflow-x: auto;
    overflow-y: hidden;
    margin-bottom: 30px; 
    flex-shrink: 0;
    
    ul{
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        gap: 30px;
        
        .item-nav{
            display: flex;
            align-items: center;
            cursor: pointer;
            user-select: none;

            svg path {
                fill: ${({theme})=>theme.text.primary};
            }

            span{
                margin-left: 20px;
                font-weight: 600;
                font-size: 18px;
                color: ${({theme})=>theme.text.primary};
            }
        }

        .item-nav.active{
            position: relative;
            svg path{ fill: ${({colorMain})=>colorMain}; }
            span{ color: ${({colorMain})=>colorMain}; }
            &::before{
                content: '';
                position: absolute;
                bottom: -12.5px;
                left: 0;
                width: 100%;
                height: 3px;
                background-color: ${({colorMain})=>colorMain};
                border-radius: 30px;
            }
        }
    }

    /* SELECT TEXT */
    ::selection {
        background: rgba(0, 217, 255, 0.411);
        color: white;
    }

    /* SCROLL */
    ::-webkit-scrollbar{
        height: 6px;
        
    }
    ::-webkit-scrollbar-track{
        background-color: white;
    }

    ::-webkit-scrollbar-thumb{
        background-color: rgba(212, 212, 212, 0.582);
        border-radius: 5px;
    }
`
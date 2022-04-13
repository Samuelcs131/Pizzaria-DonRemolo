import styled from "styled-components";
import { themeLight } from "../../styles/PalletColors";

export const ContainerNavCategories = styled.nav`
    padding: 10px 0;
    overflow-x: auto;
    overflow-y: hidden;
    
    ul{
        border-bottom: 3px solid ${themeLight.gray300};
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        gap: 30px;
        margin-bottom: 30px;
        
        .item-nav{
            display: flex;
            align-items: center;
            cursor: pointer;
            
            span{
                margin-left: 20px;
                font-weight: 600;
                font-size: 18px;
            }
        }

        .item-nav.active{
            position: relative;
            &::before{
                content: '';
                position: absolute;
                bottom: -12.5px;
                left: 0;
                width: 100%;
                height: 3px;
                background-color: black;
                border-radius: 30px;
            }
        }
    }
`
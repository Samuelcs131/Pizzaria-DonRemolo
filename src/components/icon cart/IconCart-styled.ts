import styled from "styled-components";
import { themeLight } from "../../styles/PalletColors";
import {tItemsCart} from '../../types/types'


export const ContainerIconCart = styled.div`
    position: relative;
    
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
`
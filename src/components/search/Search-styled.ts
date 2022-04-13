import styled from "styled-components";
import { themeLight } from "../../styles/PalletColors";

export const ContainerSearch = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${themeLight.gray300};
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-radius: 10px;

    label{
        display: grid;
        place-items: center;
    }

    input{
        margin: 0 20px;
        width: 100%;

        &::placeholder{
            color: ${themeLight.gray600};
            font-weight: 400;
        }
    }
`
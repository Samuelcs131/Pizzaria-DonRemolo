import styled from "styled-components";
import { themeLight } from "./PalletColors";

export const TitleAndText = styled.div`
    h2{
        font-weight: 700;
        font-size: 26px;
        color: ${themeLight.gray900};
    }

    p{
        font-weight: 600;
        font-size: 16px;
        line-height: 10px;
        color: ${themeLight.gray500};
    }
`
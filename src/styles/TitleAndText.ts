import styled from "styled-components";

export const TitleAndText = styled.div`
    h2{
        font-weight: 700;
        font-size: 26px;
        color: ${({theme})=>theme.text.primary}; 
    }

    p{
        font-weight: 600;
        font-size: 16px;
        line-height: 10px;
        color: ${({theme})=>theme.text.secundary};
    }
`
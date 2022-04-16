import styled from "styled-components"; 

export const ContainerSearch = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${({theme})=>theme.background.secundary};
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-radius: 10px;

    label{
        display: grid;
        place-items: center;
    }

    svg path{
        fill: ${({theme})=>theme.text.secundary};
    }

    input{
        margin: 0 20px;
        width: 100%;
        color: ${({theme})=>theme.text.primary};

        &::placeholder{
            color: ${({theme})=>theme.text.secundary};
            font-weight: 400;
        }
    }
`
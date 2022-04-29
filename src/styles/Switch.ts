import styled from "styled-components";

export const Switch = styled.div` 
    .switch{
        width: 65px;
        height: 30px;
        background-color: ${({theme})=>theme.text.secundary};
        border-radius: 35px;
        position: relative;
        display: block;
        cursor: pointer;
        
        &::after{
            content: '';
            position: absolute;
            left: 5px;
            top: 4px;
            width: 21px;
            height: 21px;
            border-radius: 50%;
            background-color: ${({theme})=>theme.background.primary};
            transition: left .3s;
        }
 
        &.active{
            &::after{
                left: 40px;
            }
        }
    }

    
    
`
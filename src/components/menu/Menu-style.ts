import styled from "styled-components";
import { iMenuContainer } from "../../types/interfaces"; 

export const MenuContainer = styled.div<iMenuContainer>`

.menu-container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
        width: 90px; 
        background-color: ${({theme})=>theme.background.secundary};
        flex-shrink: 0;
        transition-duration: .25s;
        transition-property: width; 
        transition-timing-function: linear;
        align-items: center;
        overflow: hidden;
        z-index: 1000;
    }

    /* LOGO AND MENU */
    .container-logo-and-menu{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px 20px;
        height: 85px;
        box-sizing: border-box;

        /* LOGO MENU */
        .logo-menu{ 
            display: none;
            align-items: center;
            user-select: none;

            span{
                width: 135px;
                font-weight: 800;
                color: #FF4E4E;
                margin-left: 14px;
                font-size: 16px;
                line-height: 15px;

                b{ font-size: 20px;}
            }
        }
        /* ICON HAMBURGUER */
        .icon-menu {
            margin: 0 auto;
            cursor: pointer;
            div{
                width: 30px;
                height: 4px;
                background-color: ${({theme})=>theme.text.secundary};
                margin: 6px;
                transition: .3s;
                border-radius: 10px;
            }
            .l-3:nth-child(3){
                width: 17px;
            }
        }

    }

    /* MENU LIST */
    .menu-list{
        margin-top: 20px;
        height: 100%;
        width: 100%;
        ul{
            display: flex;
            flex-direction: column;
            flex-grow: 0;
            flex-shrink: 0;
            gap: 30px;
            li{
                width: 100%;
                padding: 0 20px;
                /* MENU LIST */
                .item-menu{
                    height: 50px;
                    font-weight: bold;
                    font-size: 16px;
                    display: flex;
                    align-items: center;
                    user-select: none;
                    svg{
                        flex-shrink: 0;
                        width: 45px;
                        path{
                            fill: ${({theme})=>theme.text.secundary};
                        }
                    }
                    span{
                        margin-left: 20px;
                        display: none;
                        color: ${({theme})=>theme.text.secundary};
                    }
                }
                /* MENU LIST ACTIVE */
                .item-menu.active{
                    position: relative;
                    span{
                        color: ${({colorMain})=>colorMain};
                    }

                    svg path{ 
                        fill: ${({colorMain})=>colorMain};
                    }
                    &::before{
                        content: '';
                        position: absolute;
                        right: -20px;
                        height: 100%;
                        width: 5px;
                        border-radius: 10px;
                        background-color: ${({colorMain})=>colorMain};
                    }
                }
            }
        }
    }

    /* FOOTER */
    .footer-menu{
        padding: 10px 20px;
        display: none;
        span{
            flex-shrink: 0;
            font-size: 14px;
            user-select: none;
            color: ${({theme})=>theme.text.secundary};
        }
    }

    /* MENU ACTIVE ------------------------------ */
    .menu-container.active{
        width: 342px; 
        /* LOGO AND MENU */
        .container-logo-and-menu{ 
            /* LOGO MENU */
            .logo-menu{
                display: flex;
            }
            /* ICON MENU */
            .icon-menu {
                margin: initial;
                .l-1{ transform: rotate(-45deg) translate(0px, 8px); width: 15px;}
                .l-2{ opacity: 0; }
                .l-3{ transform: rotate(45deg) translate(0px, -8px); width: 15px;}
            }
        }
            /* MENU LIST */
            .menu-list{ 
                ul{ 
                    li{ 
                        /* MENU LIST */
                        .item-menu{ 
                            span{
                                margin-left: 20px;
                                display: block;
                            }
                        } 
                    }
                }
            }
            .footer-menu{
                display: flex;
            }
    }

    @media screen and (max-width: 767px) {
        .menu-container{
            position: absolute;

            width: 60px;
            .container-logo-and-menu{
                padding: 5px;
            }

            .menu-list{
                ul li{
                    padding: 0 7px;
                }
            }
        }
        
    }
`
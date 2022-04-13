import styled from "styled-components";
import { themeLight } from "../../styles/PalletColors";

type tColorMenu = {
    colorMenu: string,
}

export const MenuContainer = styled.div<tColorMenu>`

.menu-container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
        width: 90px; 
        background-color: ${themeLight.gray300};
        flex-shrink: 0;
        transition-duration:   .25s;
        transition-property: width; 
        transition-timing-function: linear;
        align-items: center;
        overflow: hidden;
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
                color: ${themeLight.red500};
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
                background-color: ${themeLight.gray600};
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
                    }
                    span{
                        margin-left: 20px;
                        display: none;
                    }
                }
                /* MENU LIST ACTIVE */
                .item-menu.active{
                    position: relative;
                    color: ${props=>props.colorMenu};

                    svg path{ 
                        fill: ${props=>props.colorMenu};
                    }
                    &::before{
                        content: '';
                        position: absolute;
                        right: -20px;
                        height: 100%;
                        width: 5px;
                        border-radius: 10px;
                        background-color: ${props=>props.colorMenu};
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
`
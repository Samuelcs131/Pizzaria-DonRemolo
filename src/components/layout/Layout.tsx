import GlobalStyle from "../../styles/globalStyle";
import { tChildrenProps } from "../../types/types";
import Menu from "../menu/Menu";
import { ContainerLayout } from "./Layout-style";
import { ThemeProvider } from 'styled-components'
import { themeDark } from "../../styles/PalletColors";
import { themeLight } from "../../styles/PalletColors";
import { useContext, useState } from "react";
import { DataContext } from "../../store/GlobalState";

const Layout = ({children}:tChildrenProps) => {

    const { state } = useContext(DataContext)

    return(
        <ContainerLayout>
            <ThemeProvider theme={state.themePage.theme === 'light' ? themeLight : themeDark}>
                <GlobalStyle/>
                <Menu/>
                {children}
            </ThemeProvider>
        </ContainerLayout>
    )
}

export default Layout;
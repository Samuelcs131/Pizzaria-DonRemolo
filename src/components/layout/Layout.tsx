import GlobalStyle from "../../styles/globalStyle";
import { tChildrenProps } from "../../types/types";
import Menu from "../menu/Menu";
import { ContainerLayout } from "./Layout-style";



const Layout = ({children}:tChildrenProps) => {
    return(
        <ContainerLayout>
            <GlobalStyle/>
            <Menu/>
            {children}
        </ContainerLayout>
    )
}

export default Layout;
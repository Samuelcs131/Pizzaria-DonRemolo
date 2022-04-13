import { ContainerContent } from "./Content-style";
import { tChildrenProps } from '../../types/types'

const Content = ({children}:tChildrenProps) => {
    return(<>
        <ContainerContent>
            {children}
        </ContainerContent>
    </>)
}

export default Content;
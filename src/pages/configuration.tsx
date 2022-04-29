import Content from "../components/content/Content";
import HeadPage from "../components/HeadPage";
import { TitleAndText } from "../styles/TitleAndText";

const Configuration = () => {
    return(<>
    <HeadPage titlePage="Configuração - Pizzaria Don Remolo" />
        <Content>
            <TitleAndText style={{marginBottom: '30px'}}>
                <h2>Preferencias</h2>
                <p>Configure a página, tema escuro/claro e automatize o checkout</p>
            </TitleAndText>
        </Content>
        </>)
}

export default Configuration;
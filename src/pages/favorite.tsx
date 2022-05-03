import CardProduct from "../components/card product/CardProduct";
import Content from "../components/content/Content";
import HeadPage from "../components/HeadPage";
import { TitleAndText } from "../styles/TitleAndText";

const Favorite = () => {
    return(
        <>
        <HeadPage titlePage="Favoritos - Pizzaria Don Remolo"></HeadPage>
        <Content> 
            <TitleAndText>
                <h2>Favoritos</h2>
                <p>Produtos favoritos</p>
            </TitleAndText>
            
        </Content>
        </>
    )
}

export default Favorite;
import { GetStaticProps } from "next";
import { useContext, useEffect } from "react";
import CardProduct from "../components/card product/CardProduct";
import Content from "../components/content/Content";
import HeadPage from "../components/HeadPage";
import { DataContext } from "../store/GlobalState";
import { TitleAndText } from "../styles/TitleAndText";
import { iCart, iDataContext, iProduct } from "../types/interfaces";
import Products from '../../public/Products.json'

interface iFavorite {
    //productsData: Array<iProducts>
}

const Favorite = ({productsData}: any): JSX.Element => {

    //console.log(productsData)
    const {state, dispatch} = useContext<iDataContext>(DataContext)

    const productFavorite: Array<any>  = state.favoriteProducts || []

    useEffect(()=>{
          console.log(productFavorite)
    })

    return(
        <>
        <HeadPage titlePage="Favoritos - Pizzaria Don Remolo"></HeadPage>
        <Content>
            <TitleAndText style={{marginBottom: '20px'}}>
                <h2>Favoritos</h2>
                <p>Produtos favoritos</p>
            </TitleAndText>
            <CardProduct products={[]}></CardProduct>
        </Content>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const productsData:Array<iProduct> = Products

    return { props: { productsData } }
}

export default Favorite;
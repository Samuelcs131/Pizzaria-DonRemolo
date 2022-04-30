import type { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import CardProduct from '../components/card product/CardProduct'
import Content from '../components/content/Content'
import HeadPage from '../components/HeadPage' 
import IconCart from '../components/cart/IconCart'
import NavCategories from '../components/navegation categories/NavCategorias'
import Search from '../components/search/Search'
import { Header } from '../styles/Header'
import { TitleAndText } from '../styles/TitleAndText'
import Products from '../../public/Products.json'
import { iListProducts, iProducts } from '../types/interfaces' 


interface iHome {
  productsData: Array<iProducts>
}

const Home: NextPage<iHome> = ( {productsData} ) => {

  const [dataForm, setDataForm] = useState();
  const [selectCategory, setSelectCategory] = useState<string>('pizza');

  const products:Array<iListProducts> = productsData.filter( (item)=> item.category === selectCategory )[0].list

  return (
    <>
    <HeadPage titlePage="Home - Pizzaria Don Remolo"/>
      <Content>
        
        <Header style={{marginBottom: '40px'}}>
          <Search setProps={setDataForm} />
          <IconCart/>
        </Header>

          <TitleAndText style={{marginBottom: '30px'}}>
            <h2>Categorias</h2>
            <p>Elige nuestras deliciosas pizzas </p>
          </TitleAndText>

        <NavCategories setProps={setSelectCategory} />
        
        <CardProduct products={products} />

      </Content>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const productsData:Array<iProducts> = Products

  return { props: { productsData } }
}

export default Home

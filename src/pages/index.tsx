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
import { iProduct } from '../types/interfaces' 


interface iHome {
  productsData: Array<iProduct>
}

const Home: NextPage<iHome> = ( {productsData} ) => {

  
  const [searchData, setSearchData] = useState<string>('');
  const [selectCategory, setSelectCategory] = useState<string>('pizza');
  
  const category:Array<iProduct> = productsData.filter( (item: iProduct)=>{
    return item.category === selectCategory
  })
  
  const products:Array<iProduct> = category.filter( (item)=> (item.name).toLowerCase().includes(searchData))

  return (
    <>
    <HeadPage titlePage="Home - Pizzaria Don Remolo"/>
      <Content>
        
        <Header style={{marginBottom: '40px'}}>
          <Search setProps={setSearchData} />
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

  const productsData:Array<iProduct> = Products

  return { props: { productsData } }
}

export default Home

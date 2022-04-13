import type { NextPage } from 'next'
import { useState } from 'react'
import CardProduct from '../components/card product/CardProduct'
import Content from '../components/content/Content'
import HeadPage from '../components/HeadPage' 
import IconCart from '../components/icon cart/IconCart'
import NavCategories from '../components/navegation categories/NavCategorias'
import Search from '../components/search/Search'
import { Header } from '../styles/Header'
import { TitleAndText } from '../styles/TitleAndText'

const Home: NextPage = () => {

  const [dataForm, setDataForm] = useState();

  return (
    <>
    <HeadPage titlePage="Home"/>
      <Content>
        
        <Header style={{marginBottom: '40px'}}>
          <Search setProps={setDataForm} />
          <IconCart/>
        </Header>
        <TitleAndText style={{marginBottom: '30px'}}>
          <h2>Categorias</h2>
          <p>Elige nuestras deliciosas pizzas </p>
        </TitleAndText>
        <NavCategories/>
        <CardProduct/>

      </Content>
    </>
  )
}

export default Home

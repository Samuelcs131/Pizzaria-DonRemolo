import type { NextPage } from 'next'
import { useState } from 'react'
import Content from '../components/content/Content'
import HeadPage from '../components/HeadPage' 
import IconCart from '../components/icon cart/IconCart'
import Search from '../components/search/Search'
import { Header } from '../styles/Header'

const Home: NextPage = () => {

  const [dataForm, setDataForm] = useState();

  return (
    <>
    <HeadPage titlePage="Home"/>
      <Content>
        <Header>
          <Search setProps={setDataForm} />
          <IconCart/>
        </Header>
      </Content>
    </>
  )
}

export default Home

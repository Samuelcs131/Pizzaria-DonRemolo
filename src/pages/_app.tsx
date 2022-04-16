import type { AppProps } from 'next/app' 
import Layout from '../components/layout/Layout'
import { ContainerProvider } from '../store/GlobalState'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ContainerProvider>
      <Layout> 
          <Component {...pageProps} /> 
      </Layout>
    </ContainerProvider>
  )
}

export default MyApp

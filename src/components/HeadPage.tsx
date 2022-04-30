import Head from "next/head";
import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
import { iDataContext } from "../types/interfaces";
import { tTitlePage } from "../types/types";


const HeadPage = ({titlePage}: tTitlePage) => {
    const { state } = useContext<iDataContext>(DataContext)
 
    return(
        <Head>
            <title>{titlePage}</title>
            <meta name="theme-color" 
            content={state.themePage?.theme === 'light' ? 'white' : 'black'}/>
        </Head>
    )
}

export default HeadPage;
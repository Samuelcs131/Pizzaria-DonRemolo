import Head from "next/head";
import { tTitlePage } from "../types/types";


const HeadPage = ({titlePage}: tTitlePage) => {
    return(
        <Head>
            <title>{titlePage}</title> 
        </Head>
    )
}

export default HeadPage;
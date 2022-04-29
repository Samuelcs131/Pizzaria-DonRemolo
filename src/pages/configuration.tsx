import { useContext, useEffect, useRef } from "react";
import Content from "../components/content/Content";
import HeadPage from "../components/HeadPage";
import { DataContext } from "../store/GlobalState";
import { Switch } from "../styles/Switch";
import { TitleAndText } from "../styles/TitleAndText";
import { iDataContext } from "../types/interfaces";

const Configuration = () => {

    const {state, dispatch} = useContext<iDataContext>(DataContext)
    const elementSwitch = useRef<HTMLDivElement>(null)

    function activeSwitch(){
        elementSwitch.current?.classList.toggle('active')
        
        dispatch({type:'theme',payload: {
            theme: state.themePage?.theme == 'light' ? 'dark' : 'light',
            colorMain: state.themePage?.colorMain
        }})
    }

    useEffect(()=>{
        if(state.themePage?.theme == 'dark'){ 
        elementSwitch.current?.classList.add('active')
        } else {
        elementSwitch.current?.classList.remove('active')
        }
    })

    return(<>
    <HeadPage titlePage="Configuração - Pizzaria Don Remolo" />
        <Content>
            <TitleAndText style={{marginBottom: '30px'}}>
                <h2>Preferencias</h2>
                <p>Configure a página, tema escuro/claro e automatize o checkout</p>
            </TitleAndText>

            <Switch onClick={()=>activeSwitch()}>
                <div ref={elementSwitch} className="switch"></div>
            </Switch>
        </Content>
        </>)
}

export default Configuration;
import { createContext, useReducer} from 'react' 
import { iGlobalState } from '../types/interfaces';
import { tChildrenProps } from '../types/types';
import { reducer } from './Reducer';

// DEFININDO UM CONTEXTO
const DataContext = createContext<any>({});

// VALOR INICIAL
const INITIAL_STATE: iGlobalState = {
    themePage: { theme: 'light', colorMain: '#FF4E4E'}
}

// UM COMPONENTE QUE VAI PASSAR OS VALORES PARA OS FILHOS
const ContainerProvider = ({children}: tChildrenProps) => {

		// IRÁ ALTERAR O ESTADO CONFORME PEDIDO
    const [state, dispatch] = useReducer( reducer, INITIAL_STATE )

    return (
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}

export { ContainerProvider, DataContext };
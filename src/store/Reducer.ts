import { iCart, iGlobalState, iThemePage } from "../types/interfaces";

// TYPE ACTION
type tActions = 
| { type: 'theme', payload: iThemePage } 
| { type: 'cart', payload: Array<iCart> }

// state: estado anterior, action: uma ação
export const reducer = (state: iGlobalState, action: tActions): any => {

    switch(action.type){

        // USER
        case 'theme':
        return { ...state, themePage: action.payload };
        
        // CART
        case 'cart':
        return { ...state, cart: action.payload };

        // DEFAULT
        default:
        return state;

    }

}
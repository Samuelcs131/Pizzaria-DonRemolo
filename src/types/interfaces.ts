/* GLOBAL STATE ----------------------------------- */
export interface iGlobalState {
    themePage?: iThemePage,
    cart?: Array<iCart>,
}

export interface iThemePage {
    theme?: string, 
    colorMain?: string
}

export interface iCart {
    product?: string,
    price?: number,
}
/* COLOR PALLET ----------------------------------- */
export interface iThemeTextColor {
    primary: string,
    secundary: string,
}

export interface iThemeBackgroundColor {
    primary: string,
    secundary: string,
}

export interface iThemeColor {
    background: iThemeBackgroundColor,
    text: iThemeTextColor,
    sunsetOrange600: string,
    sunsetOrange500: string,
    sunsetOrange400: string, 
    yellowOrange600: string,
    yellowOrange500: string,
    yellowOrange400: string, 
    pictonBlue600: string,
    pictonBlue500: string,
    pictonBlue400: string,
    brinkPink600: string,
    brinkPink500: string,
    brinkPink400: string
}

/* COMPONENTS ----------------------------------- */
export interface iCardProduct {
    colorMain: string
}

export interface iMenuContainer {
    colorMain: string
}

export interface iColorMain {
    colorMain: string
}
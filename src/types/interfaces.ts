/* GLOBAL STATE ----------------------------------- */
export interface iGlobalState {
    themePage?: iThemePage,
    cart?: Array<iCart>, 
    favoriteProducts?: Array<iCart>
}
export interface iThemePage {
    theme?: string, 
    colorMain?: string
}
export interface iCart {
    id?: string,
    name?: string,
    price?: number,
    img?: string
}
export interface iDataContext {
    state: iGlobalState,
    dispatch: any
}
/* COLOR PALLET ----------------------------------- */
export interface iThemeColor {
    background: iThemeBackgroundColor,
    text: iThemeTextColor,
    color: iThemeColors
}
export interface iThemeTextColor {
    primary: string,
    secundary: string,
}
export interface iThemeBackgroundColor {
    primary: string,
    secundary: string,
    tertiary: string
}
export interface iThemeColors{
    sunsetOrange: string;
}
/* COMPONENTS ----------------------------------- */
export interface iCardProduct {
    colorMain: string
}
export interface iMenuContainer {
    colorMain: string | undefined
}
export interface iColorMain {
    colorMain: string
}
export interface iIconCart {
    theme: iThemeColor
}
export interface iGlobalStyle {
    theme: iThemeColor
}
/* DATA ----------------------------------- */
export interface iProducts {
    category: string,
    list: Array<iListProducts>
}
export interface iListProducts {
    id: string,
    name: string,
    price: number,
    img: string,
    description: string
}
 
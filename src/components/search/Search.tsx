import { ContainerSearch } from "./Search-styled";

const Search = ({setProps}:any ) => {
    return(<>
        <ContainerSearch>
            <label htmlFor="search-input">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.83589 0C4.41263 0 0 4.41239 0 9.83536C0 15.2583 4.41263 19.6707 9.83589 19.6707C12.0182 19.6703 14.1376 18.9398 15.8567 17.5955L21.2615 23L23 21.2616L17.5952 15.8571C18.9402 14.1379 19.6713 12.0181 19.6718 9.83536C19.6718 4.41239 15.2592 0 9.83589 0Z" fill="#A6A6A6"/>
            </svg>
            </label>

            <input type="text" id="search-input" onChange={(e)=>setProps(e.target.value)} placeholder="Buscar algo no menu..."/>
        </ContainerSearch>
    </>)
}

export default Search;
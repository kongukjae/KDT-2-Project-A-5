import { Cookies } from 'react-cookie';
  const cookies = new Cookies();
  // set
  export const setCookie = (name : string, value : string|Array<string|Number> ,  option? : any , ) => {
    return cookies.set(name, value, { ...option })
  }
  // get
  export const getCookie = (name : string)=> {
    return cookies.get(name)
  }
  // cookies delete
  export const  removeCookie = (name : string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
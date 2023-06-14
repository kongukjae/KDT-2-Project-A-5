import { Cookies } from 'react-cookie';
  const cookies = new Cookies();
  // set
  export const setCookie = (name : string, value : string , option? : any ) => {
    return cookies.set(name, value, { ...option })
  }
  // get
  export const getCookie = (name : string)=> {
    return cookies.get(name)
  }
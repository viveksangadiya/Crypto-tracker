import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import {createContext} from 'react' 

const Crypto=createContext()
const CryptoContext = ({children}) => {
  const[currency,setCurrency]=useState("INR");
  const[symbol,setSymbol]=useState("₹")
  useEffect(()=>{
    return ()=>{
       if(currency=="INR") setSymbol("₹")
       else if(currency=="USD") setSymbol("$"); 
    }
  },[currency]);

  return <Crypto.Provider value={{currency,setCurrency,symbol}}>{children}</Crypto.Provider>
    
}

export default CryptoContext;

export const CryptoState=() =>{
   return useContext(Crypto);
}
import style from "./Dark.module.css"
import { useEffect, useState } from "react";
export default function DarkMod(){
     const[dark, setDark] = useState(false);

    useEffect(()=>{
        const hora = new Date().getHours();
        if(hora >= 18 || hora < 5){
            setDark(true);


        }else{
            setDark(false);
        }

    },[])

      return (
        <>
        <div className={dark ? style.dark : style.light}>
        <h1>Aula sobre useStates - DarkMod</h1>
         <h2>{dark ? "🌚 Modo Dark" : "☀️ Modo Light"}</h2>
         <button onClick={() => setDark(!dark)} className={style.botao}>{dark ? "Ativar Modo Light" : "Ativar Modo Dark"}</button>
    
        </div>
          
        </>
      )
}
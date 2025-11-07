import { useState, } from "react";
export default function ControleAgua ({}){

    const [copos, setCopos] = useState(0)


    function AdicionarCopo(){
        setCopos(copos + 1)
    }

    function resetar(){
        setCopos(0)
    }


    return(
        <>
        <h2>Controle de Água </h2>
        <p>Você bebeu <strong>{copos}</strong> copos de água hoje.</p>

        <button onClick={AdicionarCopo}>Beber agua</button>

        <button onClick={resetar}>Resetar</button>
        
        </>
    )


}
 


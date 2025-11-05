import { useState, useEffect } from "react";
import styles from "./Veiculo.module.css";

export default function Veiculo() {

  const [ligado, setLigado] = useState(false);
  const [velocidade, setVelocidade] = useState(0);
  const [combustivel, setCombustivel] = useState(100);

  useEffect(() => {
    if (ligado) {
      console.log(`Velocidade atual: ${velocidade} km/h`);
      if (velocidade === 100) {
        alert("🚀 Cuidado! Alta velocidade!");
      }
    }
  }, [velocidade, ligado]);

  useEffect(() => {
    if (ligado) {
      console.log("🚗 O carro foi ligado!");
    } else {
      console.log("🛑 O carro foi desligado!");
      setVelocidade(0);
      alert("🔴 O carro foi desligado!");
    }
  }, [ligado]);
  

  function ligarDesligar() {

    if (!ligado && combustivel <= 10) {
        alert("⚠️ Combustível abaixo de 10%! Abasteça antes de ligar.");
        return;
      }
  


    if (!ligado && combustivel <= 0) {
      alert("⛽ Sem combustível! Abasteça antes de ligar.");
      return;
    }

    


    setLigado(!ligado);
  }


  function Carro({ combustivel, ligado }) {
  
    useEffect(() => {
    
      if (combustivel < 20 && ligado) {
        alert("⚠️ Nível de combustível abaixo de 20%! Abasteça em breve.");
      }
    }, [combustivel, ligado]);
  
    return (
      <div>
        <p>Combustível: {combustivel}%</p>
        <p>{ligado ? "🚗 Carro ligado" : "🛑 Carro desligado"}</p>
      </div>
    );
  }



  function acelerar() {
    if (!ligado) return;

    if (combustivel > 0) {
      setVelocidade(velocidade + 10);
      setCombustivel(Math.max(combustivel - 5, 0));
    } else {
      alert("⛽ Acabou o combustível!");
      setLigado(false);
    }
  }

  function frear() {
    if (!ligado) return;
    if (velocidade > 0) {
      setVelocidade(velocidade - 10);
      setCombustivel(Math.min(combustivel + 1, 100));
    }
  }

  return (
    <>
      <div className={styles.painel}>
        <h2>Painel do Veículo</h2>
        <p><strong>Status:</strong> {ligado ? "🚗 Ligado" : "🛑 Desligado"}</p>
        <p><strong>Velocidade:</strong> {velocidade} km/h</p>
        <p><strong>Combustível:</strong> {combustivel.toFixed(0)}%</p>

        <div className={styles.botoes}>
          <button onClick={ligarDesligar}>
            {ligado ? "Desligar" : "Ligar"}
          </button>
          <button onClick={acelerar} disabled={!ligado}>Acelerar</button>
          <button onClick={frear} disabled={!ligado || velocidade === 0}>Frear</button>
        </div>
      </div>
    </>
  );
}

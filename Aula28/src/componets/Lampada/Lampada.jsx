import { useState } from "react";

export default function Lampada() {
  const [ligada, setLigada] = useState(false);

  const lampadaApagada =
    "https://w7.pngwing.com/pngs/859/425/png-transparent-light-bulb-illustration-incandescent-light-bulb-lamp-bulb-candle-product-light-thumbnail.png";
  const lampadaAcesa =
    "https://e7.pngegg.com/pngimages/922/441/png-clipart-of-yellow-light-bulb-incandescent-light-bulb-lighting-creative-bulb-flag-fashion-thumbnail.png";

  function alternarLampada() {
    setLigada(!ligada);
  }

  return (
    <>
      <h1>Lâmpada</h1>

      <img
        src={ligada ? lampadaAcesa : lampadaApagada}
        alt={ligada ? "Lâmpada acesa" : "Lâmpada apagada"}
      />

      <br />

      <button onClick={alternarLampada}>
        {ligada ? "Desligar" : "Ligar"}
      </button>
    </>
  );
}

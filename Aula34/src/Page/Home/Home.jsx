import { useState, useEffect } from "react";
import BuscaCep from "../../components/BuscaCep/BuscaCep";

export default function Home() {
    const [cep, setCep] = useState("");
    const [dadosEnderenco, setDadosEnderenco] = useState(null);
    const [erro, setErro] = useState("");


    useEffect(() => {
        if (cep === "") {
            return
        }
        async function buscarEndereco() {
            try {
                const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                if (!resposta.ok) throw new Error("Erro");

                const dados = await resposta.json();
                if (dados.erro) {
                    setErro("Cep não encontrado")
                    setDadosEnderenco(null)
                } else {
                    setDadosEnderenco(dados);
                    setErro("")
                }



            } catch (erro) {
                setErro(erro.message)
                setDadosEnderenco(null)

            }
        }
        buscarEndereco();

    }, [cep])

    return (
        <>
            <input type="text"
                placeholder="Digite o CEP"
                onKeyDown={(e) => {
                    if (e.key === "Enter") setCep(e.target.value);
                }} />
            {erro && <p>{erro}</p>}
            {dadosEnderenco &&
                <BuscaCep
                    cep={dadosEnderenco.cep}
                    logradouro={dadosEnderenco.logradouro}
                    uf={dadosEnderenco.uf}
                    localidade={dadosEnderenco.localidade} />}
        </>
    )

}
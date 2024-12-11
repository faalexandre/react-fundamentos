import React from "react";
import Cabecalho from "../../../components/Cabecalho";
import Conteudo from "../../../components/Conteudo";
import Rodape from "../../../components/Rodape";

export default function page() {
  return (
    <div className={`bg-cyan-500 `}>
      <Cabecalho titulo="Minha Aplicaçao" subtitulo="Melhor app da web" />
      <Conteudo>
        <ul>
          <li>Ana</li>
          <li>Pedro</li>
          <li>Lopes</li>
          <li>Carla</li>
        </ul>
      </Conteudo>
      <Rodape
        textoEsquerda="Feito com amor por Kubanza.dev"
        textoDireita={`Desenvolvido em ${new Date().getFullYear()}`}
      />
    </div>
  );
}

import React from "react";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";
import AreaLateral from "./AreaLateral";

interface PaginaProps {
  titulo: string;
  subtitulo: string;
  children: any;
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex h-screen">
      <AreaLateral />
      <div className="flex flex-col flex-1">
        <Cabecalho
          titulo={props.titulo}
          subtitulo={props.subtitulo}
          className="h-16 bg-gradient-to-r from-blue-800 to-zinc-900"
        />
        <Conteudo>{props.children}</Conteudo>
        <Rodape
          textoEsquerda="Feito com amor por Kubanza.dev"
          textoDireita={`Desenvolvido em ${new Date().getFullYear()}`}
        />
      </div>
    </div>
  );
}

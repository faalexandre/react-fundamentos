import React from "react";

export default function Rodape(props: any) {
  return (
    <div
      className={`flex px-10 justify-between items-center h-16 border-t border-e-zinc-800 bg-zinc-900 text-base `}
    >
      <span>{props.textoEsquerda}</span>
      <span>{props.textoDireita}</span>
    </div>
  );
}

import Pagina from "@/components/Pagina";
import "../../app/globals.css";
import { useState } from "react";

export default function paginaComEstado() {
  const [numero, alterarNumero] = useState(0);

  //Funçao que alterar o estado inicial e sempre é, o 2° parametro que recebe o 1°
  function incrementar() {
    alterarNumero(numero + 1);
  }
  function resetar() {
    alterarNumero(0);
  }
  return (
    <Pagina titulo={"Com Estado"} subtitulo={"Capitulo Estado"}>
      <div className="flex flex-col">
        <div>
          <span>Valor: </span>
          <span>{numero}</span>
        </div>
        <div className="flex flex-row py-2 gap-2 justify-center">
          <button
            className="p-2 mb-4 bg-blue-600 rounded"
            onClick={incrementar}
          >
            incrementar
          </button>
          <button className="p-2 mb-4 bg-blue-600 rounded" onClick={resetar}>
            resetar
          </button>
        </div>
      </div>
    </Pagina>
  );
}
function alterarEstado(arg0: number) {
  throw new Error("Function not implemented.");
}

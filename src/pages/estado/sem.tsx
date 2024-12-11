import Pagina from "@/components/Pagina";
import "../../app/globals.css";

export default function paginaSemEstado() {
  let numero = 0;

  function incrementar() {
    numero += 1;
    console.log(numero);
  }
  return (
    <Pagina titulo={"Sem Estado"} subtitulo={"Capitulo Estado"}>
      <div className="flex flex-col">
        <div>
          <span>Valor: </span>
          <span>{numero}</span>
          <button className="p-2 bg-blue-600" onClick={incrementar}>
            incrementar
          </button>
        </div>
      </div>
    </Pagina>
  );
}

import Cabecalho from "../components/Cabecalho";
import "../app/globals.css";
import Conteudo from "../components/Conteudo";
import Rodape from "../components/Rodape";
import Menu from "../components/Menu";
import Logo from "@/components/Logo";

export default function pagina() {
  return (
    <div className={`flex flex-col h-screen p-5 gap-5 bg-black text-white`}>
      <Cabecalho titulo="Minha Aplicação" subtitulo="Melhor app da Web" />

      <div className={`flex flex-1 gap-5`}>
        <Menu />
        <Conteudo>
          <button className="bg-orange-600 p-2 rounded-md items-center justify-center">
            Cliquez
          </button>
        </Conteudo>
      </div>

      <Rodape
        textoEsquerda="Feito com amor por Kubanza.dev"
        textoDireita={`Desenvolvido em ${new Date().getFullYear()}`}
      />
    </div>
  );
}

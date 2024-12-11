import {
  Icon360View,
  IconBraces,
  IconBrandJavascript,
  IconCode,
  IconFaceId,
  IconFileCheck,
  IconFunction,
  IconH1,
  IconHome,
  IconSitemap,
  IconTableSpark,
} from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div
      className={`flex flex-col p-2 gap-2 justify-start items-center text-3xl w-72`}
    >
      <span className="text-sm text-zinc-500 self-start pl-3 pt-4">Estado</span>
      <MenuItem
        icone={<IconCode />}
        texto="Componente sem estado"
        url="/estado/sem"
      />
      <MenuItem
        icone={<IconCode />}
        texto="Componente com estado"
        url="/estado/com"
      />
      <span className="text-sm text-zinc-500 self-start pl-3 pt-4">
        Fundamentos
      </span>
      <MenuItem
        icone={<IconBraces />}
        texto="JSX com JS"
        url="/fundamentos/soma"
      />
      <MenuItem
        icone={<IconFunction />}
        texto="JSX: Chamando Funçoes"
        url="/fundamentos/funcoes"
      />
      <MenuItem
        icone={<IconFileCheck />}
        texto="Pagina #01"
        url="/fundamentos/pagina"
      />
      <MenuItem icone={<IconSitemap />} texto="Pagina #02" url="/pagina" />
      <span className="text-sm text-zinc-500 self-start pl-3 pt-4">
        Componentes
      </span>
      <MenuItem
        icone={<IconCode />}
        texto="Componente basico"
        url="/componente/basico"
      />{" "}
      <MenuItem
        icone={<IconH1 />}
        texto="Componente titulo"
        url="/componente/titulo"
      />
      <MenuItem
        icone={<IconBrandJavascript />}
        texto="JS com JSX"
        url="/componente/trecho"
      />
    </div>
  );
}

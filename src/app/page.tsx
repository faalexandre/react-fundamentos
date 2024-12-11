import Pagina from "@/components/Pagina";
import { IconBrandReact } from "@tabler/icons-react";

export default function Home() {
  return (
    <Pagina titulo="Fundamentos React" subtitulo="Bemvindo ao mundo do React">
      <div className="flex flex-col justify-center items-center h-full w-full text-zinc-500">
        <IconBrandReact stroke={2} size={200} />
        <span className="font-black">Curso de fundamentos de React</span>
        <span className="text-sm">
          Aqui você vai aprender os fundamentos solidos da biblioteca React
        </span>
      </div>
    </Pagina>
  );
}

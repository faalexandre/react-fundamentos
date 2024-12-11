interface ConteudoProps {
  children: any;
}

export default function Conteudo(props: ConteudoProps) {
  return (
    <div
      className={`flex justify-center items-start text-3xl p-4 flex-1 bg-zinc-900 `}
    >
      {props.children}
    </div>
  );
}

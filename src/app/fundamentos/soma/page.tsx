import React from "react";

export default function Soma() {
  const nome = "Jhon";
  const idade = 40;
  return (
    <div>
      <div className="bg-orange-500">
        {nome} a {idade} ans
      </div>
      <div>{2 + 7}</div>
      <div>{idade * 2}</div>
      <div>{Math.random()}</div>
    </div>
  );
}

import { IconBrandReact } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-3xl flex items-center px-5 font-black bg-purple-700 h-16"
    >
      <span>
        <IconBrandReact size={30} stroke={1} />
      </span>
      <span className="text-2xl">React</span>
    </Link>
  );
}

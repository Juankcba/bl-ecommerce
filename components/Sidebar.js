import React from "react";
import Image from "next/image";
import useApp from "../hooks/useApp";
import Categoria from './Categoria';
const Sidebar = () => {
  const { categories } = useApp();

  return (
    <div className="bg-black">
      <Image
        width={300}
        height={100}
        src="/assets/bladelink.svg"
        alt="blade-link-logo"
      />
      <nav className="mt-10">
        {categories.map(c => (
          <Categoria key={c.id} className="text-white" categoria={c} />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

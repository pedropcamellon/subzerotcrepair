"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-10 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
      <div className="flex items-center">
        <Link
          href="/"
          className="flex items-center font-black border-b-0 text-2xl! ml-0! text-primary-900"
        >
          <Image src="/images/logo.png" height={50} width={50} alt="Logo" />
          SubZero TC Repair
        </Link>
      </div>
    </header>
  );
};

export default Header;

import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  const router=useRouter()
  return (
    <div className="fixed top-0 p-4 flex justify-between bg-[#141318] border-b-2 border-[#292433] w-full h-14">
      <div className="flex gap-2 cursor-pointer" onClick={()=>{
        router.push('/')
      }}>
        {/* <Image
        src={logo}
        alt=""
        /> */}
        <div>Logo</div>
        <div className="text-md font-bold">Feli</div>
      </div>
    </div>
  );
};

export default Navbar;

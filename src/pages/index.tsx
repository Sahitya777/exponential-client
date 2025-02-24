import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar  from "@/components/Navbar";
import LoginDashboard from "@/components/LoginDashboard";


export default function Home() {
  return (
    <div
    >
      <Navbar/>
      <LoginDashboard/>
    </div>
  );
}

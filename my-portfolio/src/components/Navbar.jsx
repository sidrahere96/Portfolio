import OverlayMenu from "./OverlayMenu";
import React,{ useState } from "react";
import logo from "../assets/logo.png"

export default function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);



  return (
    <>
  <nav className={`fixed top-0 left-0 w-full flex items-centre justify-between px-6 py-4 z-50 transition-transform duration-300 ${visible ? "translate-y-0" :"-translate-y-full"}`}>
  <div className="flex item-centre space-x-2">
  <img src={logo} alt="Logo" className="h-12 w-12"/>
  <div className="text-2xl font-bold text-white hidden sm:block">
    Sidra</div>

  </div>
  </nav>
    <OverlayMenu />
    </>
  );
}

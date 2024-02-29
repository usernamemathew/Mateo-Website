"use client";
import { useState } from "react";
import Navbar from "@/components/Navigation/Navbar/index";
import Sidebar from "@/components/Navigation/Sidebar/index";

const Navigation = () => {
  // toggle sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};

export default Navigation;
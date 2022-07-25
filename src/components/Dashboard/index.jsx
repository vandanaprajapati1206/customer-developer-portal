import React, { useState } from "react";
import { MainSection } from "../../pages/login/main";
import { HeaderTopBar } from "../Common/Header";
import { NavbarMenu } from "../Common/Header/NavBarMenu";
import { SideBarLeft } from "../Common/Sidebar";

export const MainDashBoard = () => {
  const [selected, setSelected] = useState("INTRODUCTION");
  return (
    <div>
      <HeaderTopBar />
      <SideBarLeft selected={selected} setSelected={setSelected}/>
      <NavbarMenu />
      <MainSection />
    </div>
  );
};

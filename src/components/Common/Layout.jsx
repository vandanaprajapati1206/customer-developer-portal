import React, { useState } from "react";
import { MainSection } from "../../pages/login/main";
import { HeaderTopBar } from "../Common/Header";
import { NavbarMenu } from "../Common/Header/NavBarMenu";
import { SideBarLeft } from "../Common/Sidebar";

const Layout = ({ children }) => {
  const[tab,setTab] = useState(1)
  return (
    <div className="customer-developer-layout">
      <HeaderTopBar />
      <NavbarMenu tab={tab} setTab={setTab} />
      {children}
    </div>
  );
};

export default Layout;

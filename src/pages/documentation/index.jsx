import React, { useState } from "react";
import { Route } from "react-router-dom";
import { SideBarLeft } from "../../components/Common/Sidebar";
import { MainSection } from "../login/main";
import Authentication from "./authentication";
import Guide from "./authentication/Guide";
import QuickStart from "./authentication/QuickStart";
import ApiEnvironment from "./introduction/ApiEnvironment";
import GetAllInvoices from "./invoice/GetAllInvoices";
import GetAllLoads from "./loads/GetAllLoads";

const Documentation = () => {
  const [selected, setSelected] = useState("INTRODUCTION");
  return (
    <>
      <SideBarLeft selected={selected} setSelected={setSelected} />
      <Route exact path="/documenation/introduction/api-environment">
        <ApiEnvironment />
      </Route>
      <Route exact path="/documenation/authentication/quick-start">
        <QuickStart />
      </Route>
      <Route exact path="/documenation/authentication/guides">
        <Guide />
      </Route>
      <Route exact path="/documenation/invoices/retrive-all-invoices">
        <GetAllInvoices />
      </Route>
      <Route exact path="/documenation/loads/retrive-all-loads">
        <GetAllLoads />
      </Route>
    </>
  );
};

export default Documentation;

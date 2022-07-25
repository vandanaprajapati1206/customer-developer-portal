import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "../Accordation/Accordation";
import { routesData } from "./routesData";

export const SideBarLeft = ({selected, setSelected}) => {
  return (
    <aside className="left-sidebar p-10">
      <nav className="sidebar-nav">
        <div className="d-flex justify-content-between w-100 bg-white">
          <div className="app-search header-search position-relative ">
            <span className="search-icon "></span>
            <div className="position-relative">
              <input
                type="search"
                className="form-control input-search-left"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
        {/* <Link className="sidebar-link">
          <i className="uil uil-map"></i>
          <span className="hide-menu">Tracking</span>
        </Link> */}
        <div className="menu-accordion mt-4">
          {routesData.map((route)=>(
            <Accordion title={route.title} childrens={route.childrens} route={route.route} selected={selected} setSelected={setSelected} />
          ))}
        
        </div>
      </nav>
    </aside>
  );
};

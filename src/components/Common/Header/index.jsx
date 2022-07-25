import React from "react";
import { IconLogo } from "../Icons";

export const HeaderTopBar = () => {
  return (
    <>
      <div className="topbar">
        <div className="d-flex align-items-center">
          <div className="" style={{ width: "225px" }}>
            <div className="text-center pt-10 pb-10">
              <IconLogo />
              <div className="bg-dark p-10 text-center text-white font-12 line-height-5 text-uppercase d-inline-block letter-spacing-5">
                Developers
              </div>
            </div>
          </div>
          <div className="header_content p-10">
            <div className="d-flex justify-content-between">
              <div className="app-search header-search position-relative ">
                <span className="search-icon "></span>
                <div className="position-relative">
                  <input
                    type="search"
                    className="form-control input-search-left"
                    placeholder="Search..."
                    style={{ width: "454px" }}
                  />
                </div>
              </div>
              <div className="">fgfgfgfgfgf</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

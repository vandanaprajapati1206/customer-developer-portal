import React from "react";
import Select from "react-select";
import { smallSelectStyle } from "../../src/assets/js/select-style";
import { IconEye, IconEyeShow, IconLogo } from "./Common/Icons";

export const SignUpForm = () => {
  return (
    <div className="signup-wrapper bg-animation h-100 bg-gray-50">
      <div className="d-flex align-items-center justify-content-end position-fixed right-0 mr-10 mt-10">
        <div className="text-muted mr-10">Already have an account?</div>
        <a href="/trackos/signup">
          <button className="btn btn btn-outline-light bg-white">
            Sign In
          </button>
        </a>
      </div>
      <div className="row no-gutters d-flex min-vh-100 align-items-center">
        <div className="col-lg-3 col-xl-3"></div>
        <div className="col-lg-6 col-xl-6">
          <div className="d-flex align-items-center justify-content-center flex-wrap">
            <div className="w-100 d-flex justify-content-center align-items-end">
              <div className="">
                <IconLogo />
                <div className="bg-dark p-10 text-center text-white font-12 text-uppercase letter-spacing-5">
                  Developers
                </div>
              </div>
            </div>
            <h3 className="text-center mb-50 w-100 d-block col-auto mb-20 mt-40 font-bold font-24">
              Become a PortPro Developer!
            </h3>
            <div className="form-wrapper w-max p-50 bg-white rounded-10">
              <form className="form-sm">
                <div className="form-group mb-20">
                  <label className="mb-10">
                    <span className="text-danger">*</span> Email Address
                  </label>
                  <input
                    className="form-control p-10"
                    placeholder="e.g. trucker@gmail.com"
                  />
                  <div className="text-gray-400 font-12 mt-1">
                    Your email address will be used as your log in name.
                  </div>
                </div>
                <div className="form-group mb-20">
                  <label className="mb-10">
                    <span className="text-danger">*</span> Password
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      className="form-control p-10"
                      placeholder="e.g. 1Password#"
                    />
                    <div className="input-icon">
                      <IconEye />
                    </div>
                  </div>
                  <div className="text-gray-400 font-12 mt-1">
                    Password must contain at least 1 Uppercase, 1 Number and 1
                    Symbol
                  </div>
                </div>
                <div className="form-group mb-20">
                  <label className="mb-10">
                    <span className="text-danger">*</span> Confirm Password
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="password"
                      className="form-control p-10"
                      placeholder="Repeat Password"
                    />
                    <div className="input-icon">
                      <IconEyeShow />
                    </div>
                  </div>
                  <div className="text-gray-400 font-12 mt-1">
                    Password must contain at least 1 Uppercase, 1 Number and 1
                    Symbol{" "}
                  </div>
                </div>
                <div className="form-group mb-20">
                  <label className="mb-10">
                    <span className="text-danger">*</span> Company Name
                  </label>
                  <input
                    className="form-control p-10"
                    placeholder="e.g. BigTruckCompany"
                  />
                </div>
                <div className="form-group mb-20">
                  <label className="mb-10">
                    <span className="text-danger">*</span> Company Type
                  </label>
                  <Select
                    styles={smallSelectStyle}
                    placeholder="Select Driver"
                  />
                </div>
                <div className="form-group mt-40">
                  <a href="/shipos/tracking">
                    <button
                      className="btn btn-lg btn-primary w-100 justify-content-center"
                      type="button"
                    >
                      Sign Up
                    </button>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-xl-3"></div>
      </div>
    </div>
  );
};

import React from "react";
import Select from "react-select";
import { smallSelectStyle } from "../assets/js/select-style";
import {
  IconClockApprovel,
  IconEye,
  IconEyeShow,
  IconLogo,
} from "./Common/Icons";

export const ApproveSignUp = () => {
  return (
    <div className="signup-wrapper h-100 bg-gray-50">
      <div className="row no-gutters d-flex min-vh-100">
        <div className="col-lg-12 col-xl-12">
          <div className="w-100 d-flex justify-content-center mt-50">
            <div className="">
              <IconLogo />
              <div className="bg-dark p-10 text-center text-white font-12 text-uppercase letter-spacing-5">
                Developers
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-xl-3"></div>
        <div className="col-lg-6 col-xl-6">
          <div className="d-flex align-items-center justify-content-center flex-wrap">
            <IconClockApprovel />
            <h3 className="text-center mb-50 w-100 d-block col-auto m-0 font-medium font-24">
              Thank you for applying to become a developer in PortPro's
              Developer Portal. Our team will be in touch shortly to validate
              your account
            </h3>
          </div>
        </div>
        <div className="col-lg-3 col-xl-3"></div>
      </div>
    </div>
  );
};

import React from "react";
import DynamicComponent from "../../../components/Common/DynamicComponent/DynamicComponent";

const data = {
  title: "Generate Refresh Token",
  subTitle: "This endpoint retrieve all load.",
  description: "Example of Generate Refresh Token you can find here.",
  requestLink: "GET http://localhost:7001/v1/token/generate-refresh",
  queryParameters: [
    {
      parameter: "environment",
      type: "Array[“sandbox”,“production”]",
      description: "In which environment the token will be going to use",
    },
  ],
  note: "Here you receive a Refresh token in the “token” field. With the help of auth token we can generate a Access Token",
  remember: "test remember",
};

const jsonContent = `{
    "_object": "/api/response",
    "self": "/v1/token/generate-refresh",
    "version": "1.0.0",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmQ4ZjhhYzZkNmE1OTIzZmE0NDBhMzMiLCJpYXQiOjE2NTg0NzcwNjksImV4cCI6MTY2NzExNzA2OX0.GswCJGneU3M2a7hIClitcMnz5C_cR71MJOB33X45Xls"
    },
    "error": null
 }`;

export const AccessToken = () => {
  return (
    <div>
      <DynamicComponent  props={data} content={jsonContent}/>
    </div>
  );
};

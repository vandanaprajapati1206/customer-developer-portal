import React from "react";
import DynamicComponent from "../../../components/Common/DynamicComponent/DynamicComponent";

const data = {
  title: "Retrive All Loads",
  subTitle: "This endpoint retrieve all load.",
  description: "Example of load object you can find here.",
  requestLink: "GET https://api1.app.portpro.io/v1/loads/",
  queryParameters: [
    {
      parameter: "status",
      type: "Array[string]",
      description: "statuses of load"
    },
    {
      parameter: "status",
      type: "Array[string]",
      description: "statuses of load"
    }
  ],
  requestParameters: [
    {
      parameter: "status",
      type: "Array[string]",
      description: "statuses of load"
    },
    {
      parameter: "status",
      type: "Array[string]",
      description: "statuses of load"
    }
  ],
  note: "test Notes",
  remember: "test remember",
};

const jsonContent = `{
  "_object": "/api/response",
  "self": "/v1/generate-new-token",
  "version": "1.0.0",
  "data": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYXJyaWVyIjoiNjI3MjE4ZDk5hNDkxNWNkN2E3MzRiIiwidXNlciI6IjYyNzIxOGQ5OTViYTQ5MTVjZDdhNzM0YiIsImlhdCI6MTY1MTY2MDMwMSwiZXhwIjoxNjUxNjcxMTAxfQ.KtMQQ3LZPfLL72wmKVJgbFvBb3ct0LwgDHDar1xSA-s",
      "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYXJyaWVyIjoiNjI3MjE4ZDk5NNkN2E3MzRiIiwidXNlciI6IjYyNzIxOGQ5OTViYTQ5MTVjZDdhNzM0YiIsImlhdCI6MTY1MTY2MDMwMSwiZXhwIjoxNjYwMzAwMzAxfQ.E0hcNHVyIyOyv7DJ_m9Fd2zN7LT-wUSJmPowz0NJJQk",
      "tokenType": "public"
  },
  "error": null
}`;

const GetAllLoads = () => {
  return (
    <div>
      <DynamicComponent props={data} content={jsonContent}/>
    </div>
  );
};

export default GetAllLoads;

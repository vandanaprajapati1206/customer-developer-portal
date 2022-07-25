import React from 'react'
import DynamicComponent from '../../../components/Common/DynamicComponent/DynamicComponent'
const data = {
    title: "Retrive All Invoices",
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
    "self": "/v1/loads",
    "version": "1.0.0",
    "data": [<Load Object>, <Load Object>],
    "error": null
 }
 `;

const GetAllInvoices = () => {
  return (
    <div><DynamicComponent props={data} content={jsonContent}/></div>
  )
}

export default GetAllInvoices
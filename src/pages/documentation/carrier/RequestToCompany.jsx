import React from 'react'
import DynamicComponent from '../../../components/Common/DynamicComponent/DynamicComponent'

const data = {
    title: "Create Request to Company",
    subTitle: "This endpoint will make a request to the carrier.",
    description: "Example of Create Request to Company you can find here.",
    requestLink: "GET http://localhost:7001/v1/customer-request",
    note: "You have to reach the admin for approval for the request.",
    remember: "you have to reach the admin for approval for the request.",
  };
  
  const jsonContent = `{
    "_object": "/api/response",
    "self": "/v1/customer-request",
    "version": "1.0.0",
    "data": {
        "status": "PENDING",
        "isDeleted": false,
        "_id": "62dav9f6d832ea1a345e17a3",
        "carrierID": "F0ED87EA18",
        "description": "test description",
        "masterCustomerId": "62d8f8accad6a5923fa440a33",
        "environment": "production",
        "createdAt": "2022-07-22T09:12:22.223Z",
        "updatedAt": "2022-07-22T09:12:22.223Z",
        "__v": 0
    },
    "error": null
 }`;
  

export const RequestToCompany = () => {
  return (
    <div><DynamicComponent  props={data} content={jsonContent}/> </div>
  )
}

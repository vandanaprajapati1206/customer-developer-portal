import React from "react";
import { CodingBlock } from "./CodingBlock";

const DynamicComponent = ({ props, content }) => {
  const {
    title,
    subTitle,
    description,
    requestLink,
    queryParameters,
    requestParameters,
    note,
    remember,
    requestHeader,
  } = props;
  return (
    <div className="page-fluid">
      <div className="row no-gutters">
        <div className="col-lg-6 p-4">
          <div>
            {title && <h2 className="font-bold font-22">{title}</h2>}
            {subTitle && <h6 className="font-medium font-16">{subTitle}</h6>}
            {description && (
              <p className="font-regular font-14 text-gray-600">
                {description}
              </p>
            )}
            <h6 className="font-medium font-16">HTTP Request</h6>
            {requestLink && (
              <p className="font-regular font-14 text-white bg-primary p-10">
                {requestLink}
              </p>
            )}
            {requestHeader && (
              <>
                <h6 className="font-medium font-16">Request Header</h6>
                <p className="font-regular font-14 text-white bg-primary p-10">
                  {requestHeader}
                </p>
              </>
            )}
            {queryParameters && (
              <div>
                <h6 className="font-medium font-16">Query Parameters</h6>
                <table>
                  <tr>
                    <th>Parameter</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                  {queryParameters.map((item) => (
                    <tr>
                      <td>{item.parameter}</td>
                      <td>{item.type}</td>
                      <td>{item.description}</td>
                    </tr>
                  ))}
                </table>
              </div>
            )}
          </div>
          {requestParameters && (
            <div className="pt-10">
              <h6 className="font-medium font-16">Request Parameters</h6>
              <table>
                <tr>
                  <th>Parameter</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
                {requestParameters.map((item) => (
                  <tr>
                    <td>{item.parameter}</td>
                    <td>{item.type}</td>
                    <td>{item.description}</td>
                  </tr>
                ))}
              </table>
            </div>
          )}
          {note && (
            <div className="bg-light px-20 py-15 mt-20">
              <span>{note}</span>
            </div>
          )}
          {remember && (
            <div className="bg-black px-20 py-15 mt-20 text-white">
              <span>{remember}</span>
            </div>
          )}
        </div>
        <div className="col-lg-6 bg-black">
          <div>
            <CodingBlock content={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicComponent;

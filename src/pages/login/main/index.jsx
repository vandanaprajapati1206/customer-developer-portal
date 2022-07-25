import React from "react";
import { CodingBlock } from "../../../components/Common/DynamicComponent/CodingBlock";

const content = `{
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
export const MainSection = () => {
  return (
    <div>
      <div className="page-fluid">
        <div className="row no-gutters">
          <div className="col-lg-6">
            <div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example2"
              data-bs-offset="0"
              className="scrollspy-example"
              tabIndex="0"
            >
              <div
                id="scrollspyHeading1"
                style={{ height: "1000px", backgroundColor: "#000" }}
              >
                <h4>First heading</h4>
                <p>...</p>
              </div>
              <div
                id="scrollspyHeading2"
                style={{ height: "1000px", backgroundColor: "#000" }}
              >
                <h4>First heading</h4>
                <p>...</p>
              </div>
              <div
                id="scrollspyHeading3"
                style={{ height: "1000px", backgroundColor: "#000" }}
              >
                <h4>First heading</h4>
                <p>...</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <CodingBlock content={content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

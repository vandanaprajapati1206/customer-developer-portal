import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

export const Accordion = ({
  title,
  childrens,
  setSelected,
  selected,
  route,
}) => {
  const [isOpen, setOpen] = useState(false);
  let match = useRouteMatch();
  return (
    <>
      <div className="accordion-wrapper" onClick={() => setSelected(title)}>
        <Link to={`${match.url}/${route}/${childrens[0].route}`} replace={false}>
          <div
            className={`accordion-title ${selected === title ? "open" : ""}`}
            onClick={() => setOpen(!isOpen)}
          >
            {title}
          </div>
        </Link>
        <div
          className={`accordion-item ${
            selected !== title ? "collapsed" : ""
          } mt-1`}
        >
          <div className="accordion-content">
            {childrens.map((item, index) => (
              <Link to={`${match.url}/${route}/${item.route}`} replace={true}>
              <div className="my-2 accordation-child" key={index}>
                <span className="accordation-child__text" >{item.title}</span>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

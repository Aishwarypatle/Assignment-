import React from "react";

const Breadcrumb = ({ routeSegments }) => {
  return (
    <div>
      console.log(routeSegments);
      {routeSegments.map((breadcrumb, i) => (
        <div key={i}>
          <li>
            {breadcrumb.name}
            {console.log(breadcrumb.name)}
          </li>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;

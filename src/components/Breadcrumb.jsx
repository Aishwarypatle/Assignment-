import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation
import styled from "styled-components";

const BreadcrumbNav = styled.nav`
  background-color: #f8f9fa;
  padding: 8px 16px;
`;

const BreadcrumbList = styled.ol`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BreadcrumbItem = styled.li`
  &:not(:last-child)::after {
    content: ">";
    padding: 0 8px;
    color: #6c757d;
  }

  &.active {
    color: #6c757d;
    font-weight: bold;
  }
`;

const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

const Breadcrumb = ({ routeSegments }) => {
  return (
    <BreadcrumbNav aria-label="breadcrumb">
      <BreadcrumbList>
        {routeSegments.map((segment, index) => (
          <BreadcrumbItem
            key={index}
            className={index === routeSegments.length - 1 ? "active" : ""}
            aria-current={
              index === routeSegments.length - 1 ? "page" : undefined
            }>
            {!!segment.path ? segment.name : segment.name}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </BreadcrumbNav>
  );
};

export default Breadcrumb;

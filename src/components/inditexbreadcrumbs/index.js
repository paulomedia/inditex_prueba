import React from "react";
import { useSearchParams } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import "./inditexbreadcrumbs.css";
import { Link } from "react-router-dom";

const pageType = {
  HOME: "Home",
  DETAIL: "Detail",
};

const InditexBreadcrumbs = () => {
  const [searchParams] = useSearchParams("");
  const isDetail = searchParams.get("id");

  return (
    <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
      <Link to="/">{pageType.HOME}</Link>
      {isDetail && <Link to="/">{pageType.DETAIL}</Link>}
    </Breadcrumbs>
  );
};

export default InditexBreadcrumbs;

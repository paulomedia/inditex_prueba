import React from "react";
import "./defaultbreadcrumbs.css";

import Breadcrumbs from "@mui/material/Breadcrumbs";

import { Link, Typography } from "@mui/material";

const DefaultBreadcrumbs = () => {
  // return <span>Breadcrumbs</span>;

  const isHome = true;

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      <Typography color="text.primary">
        {isHome ? "Breadcrumbs" : ""}
      </Typography>
    </Breadcrumbs>
  );
};

export default DefaultBreadcrumbs;

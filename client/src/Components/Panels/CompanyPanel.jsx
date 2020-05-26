import React from "react";
//import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const CompanyPanel = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        />
      </Container>
    </>
  );
};

//CompaniesPanel.propTypes = {};
export default CompanyPanel;

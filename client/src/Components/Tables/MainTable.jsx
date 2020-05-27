import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  green,
  yellow,
  blue,
  red,
  orange,
  pink,
} from "@material-ui/core/colors";
import FormatListNumberedOutlinedIcon from "@material-ui/icons/FormatListNumberedOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import HourglassEmptyOutlinedIcon from "@material-ui/icons/HourglassEmptyOutlined";
import StarHalfOutlinedIcon from "@material-ui/icons/StarHalfOutlined";
import AutorenewOutlinedIcon from "@material-ui/icons/AutorenewOutlined";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import TableFooter from "@material-ui/core/TableFooter";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import CompanyAction from "../Company/CompanyAction";
import IllustratorAction from "../Illustrator/IllustratorAction";
import TablePaginationActions from "./TablePaginationActions";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const MainTable = ({ demandes, user }) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  //const rows = demandes.sort((a, b) => (a. < b. ? -1 : 1));
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, demandes.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <div className="App">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right" className="test">
                <div className="container">
                  <div className="icon">
                    <FormatListNumberedOutlinedIcon
                      className="icon"
                      style={{ color: blue[500] }}
                      fontSize="Large"
                    />
                  </div>
                  <div className="content">ID</div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right" className="test">
                <div className="container">
                  <div className="icon">
                    <InfoOutlinedIcon
                      style={{ color: red[500] }}
                      fontSize="Large"
                    />
                  </div>
                  <div className="content">Description</div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right" className="test">
                <div className="container">
                  <div className="icon">
                    <MonetizationOnOutlinedIcon
                      style={{ color: green[500] }}
                      fontSize="Large"
                    />
                  </div>
                  <div className="content">Rémunération (wei)</div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right" className="test">
                <div className="container">
                  <div className="icon">
                    <HourglassEmptyOutlinedIcon
                      style={{ color: orange[500] }}
                      fontSize="Large"
                    />
                  </div>
                  <div className="content">Délais (secondes)</div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right" className="test">
                <div className="container">
                  <div className="icon">
                    <StarHalfOutlinedIcon
                      className="icon"
                      style={{ color: yellow[500] }}
                      fontSize="Large"
                    />
                  </div>
                  <div className="content">Réputation minimum</div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right" className="test">
                <div className="container">
                  <div className="icon">
                    <AutorenewOutlinedIcon
                      fontSize="Large"
                      style={{ color: pink[500] }}
                    />
                  </div>
                  <div className="content">Status</div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right" className="test">
                <div className="container">
                  <div className="icon">
                    <TouchAppIcon fontSize="Large" />
                  </div>
                  <div className="content">Action</div>
                </div>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? demandes.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : demandes
            ).map((demande) => (
              <StyledTableRow key={demande.id}>
                <StyledTableCell component="th" scope="row">
                  {demande.id}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {demande.description}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {demande.remuneration}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {demande.delais}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {demande.reputation}
                </StyledTableCell>
                <StyledTableCell align="center">{demande.etat}</StyledTableCell>
                <StyledTableCell align="left">
                  {user === "illustrateur" ? (
                    <IllustratorAction />
                  ) : (
                    <CompanyAction />
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
            {emptyRows > 0 && (
              <StyledTableRow style={{ height: 45 * emptyRows }}>
                <StyledTableCell colSpan={7} />
              </StyledTableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[3, 5/*, { label: "All", value: -1 }*/]}
                colSpan={5}
                count={demandes.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};

Table.propTypes = {
  demandes: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      remuneration: PropTypes.number.isRequired,
      delais: PropTypes.number.isRequired,
      reputation: PropTypes.number.isRequired,
      etat: PropTypes.string.isRequired,
    })
  ).isRequired,
  user: PropTypes.string.isRequired,
};
export default MainTable;

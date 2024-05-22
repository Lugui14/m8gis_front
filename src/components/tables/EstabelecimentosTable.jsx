import { useContext, useState } from "react";
import { FiltersContext } from "@/contexts/FiltersContext";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  useTheme,
} from "@mui/material";
import PropTypes from "prop-types";

function TablePaginationActions({ count, page, rowsPerPage, onPageChange }) {
  const theme = useTheme();

  const handleFirstPageButtonClick = event => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = event => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const EstabelecimentosTable = () => {
  const { estabelecimentos, total, changePage } = useContext(FiltersContext);
  const [page, setPage] = useState(0);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
    changePage(newPage);
  };

  return (
    <>
      <TableContainer
        style={{ maxHeight: "45vh", overflow: "auto" }}
        component={Paper}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Empresa</TableCell>
              <TableCell>CNPJ</TableCell>
              <TableCell>Endereço</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{}}>
            {estabelecimentos &&
              estabelecimentos.map(
                ({ id, razao_social, cnpj_basico, endereco }) => (
                  <TableRow key={id}>
                    <TableCell>{razao_social}</TableCell>
                    <TableCell>{cnpj_basico}</TableCell>
                    <TableCell>{endereco}</TableCell>
                  </TableRow>
                )
              )}
          </TableBody>
        </Table>
      </TableContainer>
      <Table>
        <TableFooter>
          <TableRow>
            <TablePagination
              sx={{ width: "100vw" }}
              colSpan={3}
              count={total}
              rowsPerPage={50}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                },
              }}
              onPageChange={handleChangePage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
};

TablePaginationActions.propTypes = {
  count: PropTypes.number,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  onPageChange: PropTypes.func,
};

export default EstabelecimentosTable;

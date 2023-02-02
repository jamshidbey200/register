import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ButtonSelector from "../ButtonSelector/ButtonSelector";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Tables({ data, onDeleteClick }) {
  return (
    <TableContainer
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        maxWidth: "1000px",
        height: 600,
        overflow: "auto",
        textAlign: "right",
      }}
      component={Paper}
    >
      {" "}
      <Link to='/create'>
        <Button
          sx={{
            color: "white",
            background: "blue",
            marginTop: 1,
            marginRight: 1,
            textDecoration: "none",
            "&:hover": {
              color: "white",
              background: "blue",
            },
          }}
          variant='add'
        >Add
        </Button>
      </Link>
      <Table
        sx={{ minWidth: 900 }}
        stickyHeader={true}
        aria-label='simple table'
      >
        <TableHead>
          <TableRow>
            {data.length &&
              Object.keys(data[0])
                ?.reverse()
                .map((el) => {
                  return (
                    <TableCell key={el.id} align='right'>
                      {el}
                    </TableCell>
                  );
                })}
            <TableCell align='right'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length &&
            data.map((item) => (
              <TableRow
                key={item.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {data.length &&
                  Object.keys(data[0])
                    ?.reverse()
                    .map((el) => {
                      return (
                        <TableCell key={el.id} align='right'>
                          {item[el]}
                        </TableCell>
                      );
                    })}
                <TableCell
                  sx={{
                    display: "flex",
                    gap: 1,
                  }}
                  align='right'
                >
                  <ButtonSelector
                    onClick={() => {
                      onDeleteClick(item.id);
                    }}
                    variant='delete'
                  />
                  <Link to={`/${item.id}`}>
                    <ButtonSelector variant='update' />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

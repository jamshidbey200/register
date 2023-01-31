import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function Tables({ data }) {
  return (
    <TableContainer
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        maxWidth: "1000px",
        height: 600,
      }}
      component={Paper}
    >
      <Table sx={{ minWidth: 900 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {data.length &&
              Object.keys(data[0])
                ?.reverse()
                .map((el) => {
                  return <TableCell align='right'>{el}</TableCell>;
                })}
            <TableCell align='right'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length &&
            data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {data.length &&
                  Object.keys(data[0])
                    ?.reverse()
                    .map((el) => {
                      return <TableCell align='right'>{row[el]}</TableCell>;
                    })}
                <TableCell
                  sx={{
                    display: "flex",
                    gap: 1,
                  }}
                  align='right'
                >
                  <Button
                    size='small'
                    sx={{
                      background: "red",
                      color: "white",
                      padding: 1,
                      "&:hover": {
                        background: "red",
                      },
                    }}
                    endIcon={<DeleteIcon />}
                  >
                    delete
                  </Button>
                  <Button
                    size='small'
                    sx={{
                      background: "purple",
                      color: "white",
                      padding: 1,
                      "&:hover": {
                        background: "purple",
                      },
                    }}
                    endIcon={<EditIcon />}
                  >
                    update
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

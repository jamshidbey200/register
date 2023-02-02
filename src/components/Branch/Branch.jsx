import { Box, Button, Paper, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { createItem, getById, updateItem } from "../../API/services";

const Branch = () => {
  const { id } = useParams();
  const formik = useFormik({
    initialValues: {
      title: "",
      address: "",
      start_work: "",
      end_work: "",
    },
    onSubmit: (values) => {
      if(id) {
        updateItem("branches", id, values);
      }else {
        createItem("branches", values)
      }
    },
  });
  useEffect(() => {
    if (id)
      getById("branches", id).then((res) => {
      });
  }, []);

  return (
    <Paper
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        maxWidth: "800px",
        minWidth: "500px",
        height: 600,
        overflow: "auto",
        padding: 3,
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: "grid", gap: 2 }}>
          <TextField
            name='title'
            fullWidth
            id='outlined-basic'
            label='title'
            variant='outlined'
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          <TextField
            name='address'
            fullWidth
            id='outlined-basic'
            label='address'
            variant='outlined'
            value={formik.values.address}
            onChange={formik.handleChange}
          />
          <TextField
            name='start_work'
            fullWidth
            id='outlined-basic'
            label='start_work'
            variant='outlined'
            value={formik.values.start_work}
            onChange={formik.handleChange}
          />
          <TextField
            name='end_work'
            fullWidth
            id='outlined-basic'
            label='end_work'
            variant='outlined'
            value={formik.values.end_work}
            onChange={formik.handleChange}
          />
        </Box>
        {id ? (
          <Button type='submit'>Update</Button>
        ) : (
          <Button type='submit'>Save</Button>
        )}
      </form>
    </Paper>
  );
};

export default Branch;

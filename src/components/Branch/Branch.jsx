import { Box, Button, Paper, TextField } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../../API/services";

const Branch = () => {
  const { id } = useParams();

  useEffect(() => {
    if (id)
      getById("branches", id).then((res) => {
        console.log(res.data);
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
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(event.target.elements.title.value);
        }}
      >
        <Box sx={{ display: "grid", gap: 2 }}>
          <TextField
            name='title'
            fullWidth
            id='outlined-basic'
            label='title'
            variant='outlined'
          />
          <TextField
            name='address'
            fullWidth
            id='outlined-basic'
            label='address'
            variant='outlined'
          />
          <TextField
            name='start-work'
            fullWidth
            id='outlined-basic'
            label='start_work'
            variant='outlined'
          />
          <TextField
            name='end_work'
            fullWidth
            id='outlined-basic'
            label='end_work'
            variant='outlined'
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

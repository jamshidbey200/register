import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";

const ButtonSelector = ({ variant, ...props }) => {
  const Buttons = {
    delete: () => (
      <Button
        size='small'
        sx={{
          background: "#D2042D",
          color: "white",
          padding: 1,
          "&:hover": {
            background: "red",
          },
        }}
        {...props}
        endIcon={<DeleteIcon />}
      >
        delete
      </Button>
    ),
    update: () => (
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
        {...props}
        endIcon={<EditIcon />}
      >
        update
      </Button>
    ),
  };
  return Buttons[variant](props);
};

export default ButtonSelector;

import { Dialog, TextField, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CallIcon from '@mui/icons-material/Call';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

export default function Configuration() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <IconButton  onClick={handleClickOpen}>
        <CallIcon htmlColor="white"/>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add Directory"}
        </DialogTitle>
        <DialogContent>
          <TextField fullWidth label="fullWidth" id="fullWidth" />
          <TextField fullWidth label="fullWidth" id="fullWidth" />
          <TextField fullWidth label="fullWidth" id="fullWidth" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

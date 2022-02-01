import * as React from "react";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import WalletTabs from "../walletsTab/walletsTab";

import { subscribeDialogText } from "../../constants";
import { language } from "../../redux/selectors";
import { connect } from "react-redux";
import { TextField } from "@mui/material";

const FormDialog = ({ open, setOpen, language }) => {
  const handleClose = () => {
    setOpen(false);
  };
  const [wallet, setWallet] = React.useState("");
  return (
    <Dialog
      open={open}
      PaperProps={{ classes: { root: "subscribe__container" } }}
    >
      <DialogTitle className="subscribe__title">
        {subscribeDialogText[language].title}
      </DialogTitle>
      <DialogContent className="subscribe__dialogcontent">
        <DialogContentText className="subscribe__text">
          {subscribeDialogText[language].details}
        </DialogContentText>
        <TextField
          id="filled-basic"
          label={subscribeDialogText[language].walletAddress}
          variant="outlined"
          color="primary"
          className="subscribe__textfield"
          onChange={(event) => setWallet(event.target.value)}
        />
        <WalletTabs />
        <DialogContentText className="subscribe__text">
          {subscribeDialogText[language].itemSubscribeText}
        </DialogContentText>
      </DialogContent>
      <DialogActions className="subscribe__actions">
        <Button variant="contained" color="primary" onClick={handleClose}>
          {subscribeDialogText[language].cancelButtonText}
        </Button>
        <Button variant="contained" color="primary" onClick={handleClose}>
          {subscribeDialogText[language].subscribeButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({ language: language(state) });

export default connect(mapStateToProps, null)(FormDialog);

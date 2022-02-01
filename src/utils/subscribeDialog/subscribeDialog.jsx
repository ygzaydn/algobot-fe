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
import { ActionTypes } from "../../redux/actionTypes";
import Swal from "sweetalert2";

const FormDialog = ({ open, setOpen, language, activateAccount }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const positiveClose = () => {
    let date = new Date();
    let day = date.getDay();
    let year = date.getFullYear();
    let month = date.getMonth();

    if (month === 12) {
      year += 1;
      month = 1;
    } else {
      month += 1;
    }
    const overallDate = `${day}/${month}/${year}`;
    activateAccount(overallDate);
    setOpen(false);
    Swal.fire({
      position: "center",
      width: 600,
      padding: "3em",
      color: `#f6edff`,
      background: "black",
      text: `${subscribeDialogText[language].popupText}`,
      title: `${subscribeDialogText[language].popupTitle}`,
      customClass: {
        closeButton: {
          color: "red",
        },
      },
    });
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
        <Button
          variant="contained"
          color="primary"
          onClick={() => positiveClose()}
        >
          {subscribeDialogText[language].subscribeButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({ language: language(state) });

const mapDispatchToProps = (dispatch) => ({
  activateAccount: (date) =>
    dispatch({ type: ActionTypes.ACTIVATE_USER, payload: date }),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormDialog);

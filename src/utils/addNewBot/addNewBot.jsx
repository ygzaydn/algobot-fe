import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { connect } from "react-redux";
import { language } from "../../redux/selectors";

const AddNewBot = ({ language, open, handleClose }) => {
    const [botType, setBotType] = React.useState("");

    const handleChange = (event) => {
        setBotType(event.target.value);
    };
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email
                        address here. We will send updates occasionally.
                    </DialogContentText>
                    <FormControl fullWidth>
                        <InputLabel id="botLabel">Bot Type</InputLabel>
                        <Select
                            labelId="botType"
                            id="botType"
                            value={botType}
                            label="Bot Type"
                            onChange={handleChange}
                            autoWidth
                        >
                            <MenuItem value={10}>Arg Pump Bot</MenuItem>
                            <MenuItem value={20}>Arg Grid Bot</MenuItem>
                            <MenuItem value={30}>Arg Smart Bot</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        placeholder="Enter a name for your bot"
                        label="Bot Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                    <Grid container>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            placeholder="Enter leverage rate"
                            label="Leverage Rate Percentage"
                            type="number"
                            variant="outlined"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            placeholder="Enter Stop Loss Percentage"
                            label="Stop Loss Percentage"
                            type="number"
                            variant="outlined"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            placeholder="Enter TP Percentage"
                            label="TP Percentage"
                            type="number"
                            variant="outlined"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            placeholder="Enter Maximum Number of Positions"
                            label="Number of Positions"
                            type="number"
                            variant="outlined"
                        />
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

const mapStateToProps = (state) => ({
    language: language(state),
});

export default connect(mapStateToProps, null)(AddNewBot);

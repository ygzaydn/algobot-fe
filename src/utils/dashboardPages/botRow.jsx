import React, { useState } from "react";
import {
    TableCell,
    TableRow,
    Button,
    Collapse,
    Box,
    IconButton,
} from "@mui/material";
import { language } from "../../redux/selectors";
import { connect } from "react-redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BotInfo from "./botInfo";

const BotRow = ({ row, text, language }) => {
    const [open, setOpen] = useState(false);
    return (
        <React.Fragment>
            <TableRow key={row.botName} className="botInfo__item">
                <TableCell align="center">
                    <IconButton
                        aria-label="expand row"
                        className="botInfo__button"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.botName}
                </TableCell>
                <TableCell
                    className={`${
                        parseFloat(row.profit) < 0
                            ? "botInfo__item--neg"
                            : parseFloat(row.profit) < 100
                            ? "botInfo__item--posLow"
                            : "botInfo__item--posHigh"
                    }`}
                    align="center"
                >
                    {row.profit}
                </TableCell>
                <TableCell
                    align="center"
                    className={`${
                        parseFloat(row.openPositions) < 3
                            ? "botInfo__item--low"
                            : parseFloat(row.openPositions) < 6
                            ? "botInfo__item--medium"
                            : "botInfo__item--high"
                    }`}
                >
                    {row.openPositions}
                </TableCell>
                <TableCell align="center" className="botInfo__botButtonGrid">
                    <Button
                        variant="contained"
                        color="primary"
                        className="botInfo__botButton"
                    >
                        {text[language].optionsButtonText}
                    </Button>
                </TableCell>
            </TableRow>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell colSpan={5}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 2 }} component="div">
                            <BotInfo botInfo={row} />
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => ({
    language: language(state),
});

export default connect(mapStateToProps, null)(BotRow);

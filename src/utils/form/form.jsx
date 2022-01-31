import React, { useState } from "react";

import { Grid, Typography, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router";

const Form = ({
  fields,
  sendButton,
  additionalText,
  options,
  clickFunction,
}) => {
  const [optionState, setOptionState] = useState(0);
  const [info, setInfo] = useState({});
  const navigate = useNavigate();

  return (
    <Grid container className="form">
      <Grid item xs={12} className="form__titlegrid">
        {Object.values(options).map((optionItem) => (
          <Button
            key={optionItem.text}
            variant="contained"
            className={`form__titlebutton ${
              optionItem.state === optionState
                ? "form__titlebutton--active"
                : "form__titlebutton--disabled"
            }`}
            onClick={() => {
              setInfo({});
              setOptionState(optionItem.state);
            }}
          >
            {optionItem.text}
          </Button>
        ))}
      </Grid>
      <Grid item xs={12} className="form__fieldgrid">
        {fields[optionState].map((fieldItem) => (
          <Grid item xs={12} className="form__fielditem" key={fieldItem.key}>
            <TextField
              placeholder={fieldItem.name}
              id={fieldItem.name}
              type={fieldItem.type}
              onChange={(event) => {
                setInfo({ ...info, [fieldItem.key]: event.target.value });
              }}
              color="primary"
              InputProps={{
                style: {
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: 20,
                  padding: "0 1rem",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} className="form__sendgrid">
        <Button
          variant="contained"
          color="primary"
          className="form__sendbutton"
          onClick={() => clickFunction[optionState](info)}
        >
          {sendButton[optionState]}
        </Button>
      </Grid>
      {additionalText[optionState].status && (
        <Grid item xs={12} className="form__textgrid">
          <Typography
            variant="subtitle1"
            className="form__textitem"
            onClick={() => navigate(additionalText[optionState].navigateTo)}
          >
            {additionalText[optionState].text}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default Form;

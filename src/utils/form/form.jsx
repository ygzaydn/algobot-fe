import React, { useState } from "react";

import { Grid, Typography, Button, TextField } from "@mui/material";

const Form = ({ fields, sendButton, additionalText, options }) => {
  const [optionState, setOptionState] = useState(0);
  options.map((el) => console.log(el));
  return (
    <Grid container className="form">
      <Grid item xs={12} className="form__titlegrid">
        {options.map((optionItem) => (
          <Button
            key={optionItem.text}
            variant="contained"
            className={`form__titlebutton ${
              optionItem.state === optionState
                ? "form__titlebutton--active"
                : "form__titlebutton--disabled"
            }`}
            onClick={() => setOptionState(optionItem.state)}
          >
            {optionItem.text}
          </Button>
        ))}
      </Grid>
      <Grid item xs={12} className="form__fieldgrid">
        {fields.map((fieldItem) => (
          <Grid item xs={12} className="form__fielditem">
            <TextField
              placeholder={fieldItem.name}
              id={fieldItem.name}
              key={fieldItem.name}
              type={fieldItem.name === "Password" ? "password" : "text"}
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
          onClick={() => sendButton.clickFunction()}
        >
          {sendButton.text}
        </Button>
      </Grid>
      {additionalText.status && (
        <Grid item xs={12} className="form__textgrid">
          <Typography variant="subtitle1" className="form__textitem">
            {additionalText.text}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default Form;

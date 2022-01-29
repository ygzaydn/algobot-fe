import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#7D20E3",
    },
    secondary: {
      main: "#1B3475",
    },
    background: {
      default: "#080410",
      paper: "#080410",
    },
    text: {
      primary: "#F6EDFF",
      secondary: "rgba(255,255,255,0.6)",
    },
  },
  typography: {
    fontFamily: "Josefin Sans",
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightBold: 600,
    htmlFontSize: 20,
    fontWeightMedium: 400,
    fontSize: 20,
  },
});

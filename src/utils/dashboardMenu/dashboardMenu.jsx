import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import { dashboardMenuText } from "../../constants";
import { language } from "../../redux/selectors";
import { connect } from "react-redux";

const DashboardList = ({ language }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className="dashboardpage__list"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon className="dashboardpage__list--icon">
          <AccountBalanceWalletOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          primary={dashboardMenuText[language].wallet}
          className="dashboardpage__list--text"
        />
        {open ? (
          <ExpandLess className="dashboardpage__list--icon" />
        ) : (
          <ExpandMore className="dashboardpage__list--icon" />
        )}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 8 }}>
            <ListItemText
              primary={dashboardMenuText[language].overview}
              className="dashboardpage__list--text"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 8 }}>
            <ListItemText
              primary={dashboardMenuText[language].deposit}
              className="dashboardpage__list--text"
            />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton>
        <ListItemIcon className="dashboardpage__list--icon">
          <ApiOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          primary={dashboardMenuText[language].trade}
          className="dashboardpage__list--text"
        />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon className="dashboardpage__list--icon">
          <BoltOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          primary={dashboardMenuText[language].earn}
          className="dashboardpage__list--text"
        />
      </ListItemButton>
    </List>
  );
};

const mapStateToProps = (state) => ({
  language: language(state),
});

export default connect(mapStateToProps, null)(DashboardList);

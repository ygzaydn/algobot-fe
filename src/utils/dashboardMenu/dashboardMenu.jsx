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

const DashboardList = () => {
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
        <ListItemText primary="Wallet" className="dashboardpage__list--text" />
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
              primary="Overview"
              className="dashboardpage__list--text"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 8 }}>
            <ListItemText
              primary="Deposit"
              className="dashboardpage__list--text"
            />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton>
        <ListItemIcon className="dashboardpage__list--icon">
          <ApiOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Trade" className="dashboardpage__list--text" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon className="dashboardpage__list--icon">
          <BoltOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Earn" className="dashboardpage__list--text" />
      </ListItemButton>
    </List>
  );
};

export default DashboardList;

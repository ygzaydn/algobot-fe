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
import { useNavigate } from "react-router-dom";

const DashboardList = ({ language, pageState, setPageState }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
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
          primary={dashboardMenuText[language].wallet.text}
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
              primary={dashboardMenuText[language].account.text}
              onClick={() =>
                navigate(
                  `/dashboard/${dashboardMenuText[language].account.url}`
                )
              }
              className={`${
                pageState === dashboardMenuText[language].account.url
                  ? "dashboardpage__list--text dashboardpage__list--text--active"
                  : "dashboardpage__list--text"
              } `}
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 8 }}>
            <ListItemText
              primary={dashboardMenuText[language].orders.text}
              onClick={() =>
                navigate(`/dashboard/${dashboardMenuText[language].orders.url}`)
              }
              className={`${
                pageState === dashboardMenuText[language].orders.url
                  ? "dashboardpage__list--text dashboardpage__list--text--active"
                  : "dashboardpage__list--text"
              } `}
            />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton>
        <ListItemIcon className="dashboardpage__list--icon">
          <ApiOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          primary={dashboardMenuText[language].charts.text}
          onClick={() =>
            navigate(`/dashboard/${dashboardMenuText[language].charts.url}`)
          }
          className={`${
            pageState === dashboardMenuText[language].charts.url
              ? "dashboardpage__list--text dashboardpage__list--text--active"
              : "dashboardpage__list--text"
          } `}
        />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon className="dashboardpage__list--icon">
          <BoltOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          primary={dashboardMenuText[language].bot.text}
          onClick={() =>
            navigate(`/dashboard/${dashboardMenuText[language].bot.url}`)
          }
          className={`${
            pageState === dashboardMenuText[language].bot.url
              ? "dashboardpage__list--text dashboardpage__list--text--active"
              : "dashboardpage__list--text"
          } `}
        />
      </ListItemButton>
    </List>
  );
};

const mapStateToProps = (state) => ({
  language: language(state),
});

export default connect(mapStateToProps, null)(DashboardList);

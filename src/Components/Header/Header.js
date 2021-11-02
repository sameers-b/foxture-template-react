import React, { useState } from "react";
import "./Header.css";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import CloseIcon from "@material-ui/icons/Close";
import Badge from "@material-ui/core/Badge";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchEnabled, setSearchEnabled] = useState(false);

  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header>
        <nav className={isMobile ? "nav-left" : "mobile mobile-menu"}>
          {isMobile ? "" : <h1 className="mobile-logo">Foxture</h1>}
          <ul>
            <li>
              <a>Home</a>
              {isMobile ? (
                ""
              ) : (
                <a>
                  <AddIcon />
                </a>
              )}
            </li>
            <li>
              <a>Shop</a>
              {isMobile ? (
                ""
              ) : (
                <a>
                  <AddIcon />
                </a>
              )}
            </li>
            {isMobile ? (
              ""
            ) : (
              <ul>
                <li>
                  <a>Login</a>
                </li>
                <li>
                  <a>New Account</a>
                </li>
              </ul>
            )}
          </ul>
        </nav>
        <nav className="nav-mid">
          <a href="" className="logo">
            <h3>Foxture</h3>
          </a>
        </nav>
        <nav className="nav-right">
          <ul
            style={
              {
                // display: "flex",
                /* width: 500px, */
                // position: "relative",
                // alignItems: "center",
                // gap: "5px",
              }
            }
          >
            <li className="search-box">
              {searchEnabled && (
                <input
                  placeholder="Search…"
                  className="searchInput"
                  inputProps={{ "aria-label": "search" }}
                />
              )}
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setSearchEnabled(!searchEnabled)}
                color="inherit"
              >
                <SearchIcon />
              </IconButton>
            </li>
            <li className="account-icon">
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Login</MenuItem>
                <MenuItem onClick={handleClose}>New Account</MenuItem>
              </Menu>
            </li>
            <li className="badge-icon">
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </li>
            <li
              className="mobile mobile-icon"
              // style={{ border: "1px solid green" }}
            >
              <button
                onClick={() => {
                  setIsMobile(!isMobile);
                }}
              >
                {isMobile ? (
                  <MenuIcon fontSize="large" />
                ) : (
                  <CloseIcon fontSize="large" />
                )}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

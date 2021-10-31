import React,{useState} from "react";
import "./Header.css";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from '@material-ui/icons/Menu';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import CloseIcon from '@material-ui/icons/Close'
import Badge from "@material-ui/core/Badge";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
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
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    border: "1px solid black",
    borderRadius: "5px",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
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
        <nav className={isMobile?'nav-left':'mobile mobile-menu'}>
          {isMobile ? '':<h1 className="mobile-logo">Foxture</h1>}
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Shop</a>
            </li>
          </ul>
        </nav>
        <nav className="nav-mid">
          <a href="" className="logo">
            <h3>Foxture</h3>
          </a>
        </nav>
        <nav className="nav-right">
          <div className="search">
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
            </div>
          </div>
          <ul>
            <li>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              ></IconButton>
            </li>
            <li>
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
            <li>
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
          </ul>
        </nav>
        {/* Mobile View */}
        <nav className="mobile mobile-icon">
          <button onClick={()=>{setIsMobile(isMobile?false:true)}}>
            {isMobile ? <MenuIcon />:<CloseIcon/>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;

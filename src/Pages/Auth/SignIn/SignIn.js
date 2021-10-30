import "./SignIn.css";

import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    border: "1px solid green",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <header>
        <nav className="nav-left">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Shop</a>
            </li>
            <li>
              <a>Home</a>
            </li>
          </ul>
        </nav>
        <nav className="nav-mid">
          <a href="" className="logo">
            my Logo
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
              >
                <div className="profile">
                  <AccountCircle />
                </div>
              </IconButton>
            </li>
            <li>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <ShoppingCartIcon />
              </IconButton>
            </li>
          </ul>
        </nav>

        {/* <div className="nav nav-left">
          <a href="" className="logo">
            my Logo
          </a>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Shop</a>
            </li>
            <li>
              <a>Home</a>
            </li>
          </ul>
        </div>
        <div className="nav">
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
              >
                <div className="profile">
                  <AccountCircle />
                </div>
              </IconButton>
            </li>
            <li>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <ShoppingCartIcon />
              </IconButton>
            </li>
          </ul> */}
        {/* </div> */}
      </header>
    </>
  );
};

export default SignIn;

// {/* <header>
//         {/* Menu */}
//         <nav>
//           {/* Menu Dextop View  */}

//           <div className="header-menu-area hone-one-header-menu-area d-md-none d-none d-lg-block">
//             <div className="container-fluid">
//               <div className="row">
//                 <div className="">
//                   <nav className="main-nav">
//                     {/* <div className="logo mobile-ham-logo d-lg-none d-block text-left">
//                       <a href="index.html">
//                         <img src="assets/logo.png" alt="" />
//                       </a>
//                     </div> */}
//                     <div className="nav-menu-left main-nav">
//                       <div className="menu-category-icon">
//                         <a href="#">
//                           <i className="bx bx-slider-alt"></i>
//                         </a>
//                       </div>
//                       <ul>
//                         <li className="has-child-menu">
//                           <a href="javascript:void(0)">Home</a>
//                         </li>
//                         <li className="has-child-menu">
//                           <a href="javascript:void(0)">Shop</a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="nav-menu-right">
//                       {/* <div className="menu-right-item"> */}
//                       <ul style={{ display: "flex", alignItems: "center" }}>
//                         <li>
//                           <div className={classes.search}>
//                             <div className={classes.searchIcon}>
//                               <SearchIcon />
//                             </div>
//                             <InputBase
//                               placeholder="Search…"
//                               classes={{
//                                 root: classes.inputRoot,
//                                 input: classes.inputInput,
//                               }}
//                               inputProps={{ "aria-label": "search" }}
//                             />
//                           </div>
//                         </li>
//                         <li>
//                           {/* <a> */}
//                           {/* <div> */}
//                           <IconButton
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleMenu}
//                             color="inherit"
//                           >
//                             <div className="profile">
//                               <AccountCircle />
//                             </div>
//                           </IconButton>
//                           <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorEl}
//                             anchorOrigin={{
//                               vertical: "top",
//                               horizontal: "right",
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                               vertical: "top",
//                               horizontal: "right",
//                             }}
//                             open={open}
//                             onClose={handleClose}
//                           >
//                             <MenuItem onClick={handleClose}>Login</MenuItem>
//                             <MenuItem onClick={handleClose}>
//                               Create account
//                             </MenuItem>
//                           </Menu>
//                           {/* </div> */}
//                           {/* </a> */}
//                         </li>
//                         <li>
//                           <IconButton
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleMenu}
//                             color="inherit"
//                           >
//                             <ShoppingCartIcon />
//                           </IconButton>
//                           {/* <span>8</span> */}
//                         </li>
//                       </ul>
//                       {/* </div> */}
//                     </div>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Menu Mobile View End */}
//         </nav>
//         {/* Menu end */}

//         {/* Search */}

//         {/* Search End */}
//       </header>
//       Header area end */}

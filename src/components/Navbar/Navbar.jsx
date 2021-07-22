import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import "./Navbar.css";
import { Button } from "@material-ui/core";

import { Link } from "react-router-dom";

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
}));

export default function Navbar() {
  const classes = useStyles();
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar
          style={{
            backgroundColor: "black",
            // color:"inherit"
          }}
          // Color="inherit"
          position="static"
        >
          {/* <LocalLibraryIcon /> */}
          <Toolbar>
            <div className="icon">
              <img
                src="https://icskhed.org/wp-content/uploads/2018/09/alumni.png"
                alt="icon"
              />
            </div>
            <Typography
              style={{
                position: "relative",
                right: "100px",
                borderRadius: "20px",
              }}
              variant="h6"
              className={classes.title}
            >
              BITOSA GLOBAL
            </Typography>
            <Button
              // variant="h6"
              disableRipple
              className={classes.title}
              style={{ position: "relative", color: "inherit" }}
            >
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/alumni"
              >
                ALUMNI NETWORK  
              </Link>
            </Button>
            <Button
              // variant="h6"
              className={classes.title}
              style={{ position: "relative", color: "inherit" }}
            >
              Contribute
            </Button>

            <Button
              // variant="h6"
              className={classes.title}
              style={{ position: "relative", color: "inherit" }}
            >
              About Us
            </Button>
            {auth && (
              <div>
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
                  <MenuItem onClick={handleClose}>Login</MenuItem>
                  <MenuItem onClick={handleClose}>Signup</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}

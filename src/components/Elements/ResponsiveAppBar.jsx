import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { Stack } from "@mui/system";
import useFireBase from "../../Hooks/useFireBase";

// const pages = ["Products", "Pricing", "Blog"];
const pages = [
  { name: "Saved Newses", url: "/savedNewses" },
  { name: "All Newses", url: "/home" },
];

function ResponsiveAppBar() {
  const { user, GoogleSignOut } = useFireBase();
  useEffect(() => {}, [user]);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
      <Toolbar disableGutters>
        <NewspaperIcon sx={{ display: { xs: "none", md: "flex" }, mr: 2,ml:0 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/home"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          NEWS
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          {/* <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{
                      textDecoration: "none",
                      color: "black",
                      cursor: "pointer",
                    }}
                    component="a"
                    href={page.url}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu> */}
        </Box>
        <NewspaperIcon sx={{ display: { xs: "flex", md: "none", }, mr: 2,ml:0 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/home"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          NEWS
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {/* {pages.map((page, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Typography
                  textAlign="center"
                  sx={{
                    textDecoration: "none",
                    color: "#FFFFFF",
                    cursor: "pointer",
                  }}
                  component="a"
                  href={page.url}
                >
                  {page.name}
                </Typography>
              </Button>
            ))} */}
        </Box>

        <Box sx={{ flexGrow: 0,mr:0 }}>
          <Stack direction="row" spacing={1}>
            {user?.displayName && (
              <Typography
                variant="p"
                sx={{ fontWeight: "bolder", marginTop: "5px",fontSize:"1.2em" }}
              >
                {" "}
                {user?.displayName || " "}
              </Typography>
            )}
            <div style={{marginTop:"3px"}}>
              <Avatar
                sx={{ height: "30px", width: "30px" }}
                alt={user?.displayName || " "}
                src={user?.photoURL || ""}
              />
            </div>
            <Button
              size="small"
              onClick={GoogleSignOut}
              variant="contained"
              color="warning"
            >
              LogOut
            </Button>
          </Stack>

          {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
        </Box>
      </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

import * as React from "react";
import styled from "@emotion/styled";
// import { darken } from "polished";
// import { Search as SearchIcon } from "react-feather";
import { useTranslation } from "react-i18next";

import {
  Grid,
  InputBase,
  AppBar as MuiAppBar,
  IconButton as MuiIconButton,
  Toolbar,
} from "@mui/material";

import { Menu as MenuIcon } from "@mui/icons-material";

// import NavbarNotificationsDropdown from "./NavbarNotificationsDropdown";
import NavbarMessagesDropdown from "./NavbarMessagesDropdown";
// import NavbarLanguagesDropdown from "./NavbarLanguagesDropdown";
import NavbarUserDropdown from "./NavbarUserDropdown";
const AppBar = styled(MuiAppBar)`ins
  background: ${(props) => props.theme.header.background};
  background-color: #ececf8;
  color: #5b626b;
  height: 40px;
  width:1290px;
  color: ${(props) => props.theme.header.color};
`;

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

const Search = styled.div`
  border-radius: 2px;
  background-color: ${(props) => props.theme.header.background};
  display: none;
  position: relative;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme.header};
  }

  //   ${(props) => props.theme.breakpoints.up("md")} {
  //     display: block;
  //   }
  //
`;
const Input = styled(InputBase)`
  color: inherit;
  width: 100%;

  > input {
    color: ${(props) => props.theme.header.search.color};
    padding-top: ${(props) => props.theme.spacing(2.5)};
    padding-right: ${(props) => props.theme.spacing(2.5)};
    padding-bottom: ${(props) => props.theme.spacing(2.5)};
    padding-left: ${(props) => props.theme.spacing(12)};
    width: 160px;
  }
`;

const Navbar = ({ onDrawerToggle }) => {
  const { t } = useTranslation();
  return (
    // <React.Fragment>
    //   <AppBar position="sticky" elevation={0}>
    //     <Toolbar>
    //       <Grid container alignItems="center">
    //         <Grid item>
    //           <IconButton
    //             color="inherit"
    //             aria-label="Open drawer"
    //             onClick={onDrawerToggle}
    //             size="large"
    //           >
    //             <MenuIcon />
    //           </IconButton>
    //         </Grid>
    //         <Grid item>
    //           {/* <Search>
    //             <SearchIconWrapper>
    //             <SearchIcon />
    //             </SearchIconWrapper>
    //             <Input placeholder={t("Search")} />
    //           </Search> */}
    //           {/* </Grid> */}
    //           <Grid item xs={12} md={12} lg={12} />
    //           <NavbarMessagesDropdown />

    //           {/* <NavbarNotificationsDropdown /> */}
    //           {/* <NavbarLanguagesDropdown /> */}
    //           <NavbarUserDropdown />
    //         </Grid>
    //       </Grid>
    //     </Toolbar>
    //   </AppBar>
    // </React.Fragment>
    <React.Fragment>
      <AppBar position="sticky" elevation={12}>
        <Toolbar>
          <Grid container alignItems="center">
            <MenuIcon />
            <Grid item sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={onDrawerToggle}
                size="large"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item>
              {/* <Search>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <Input placeholder={t("Search")} />
              </Search> */}
            </Grid>
            <Grid item xs />
            <Grid item>
              <NavbarMessagesDropdown />

              {/* <NavbarNotificationsDropdown /> */}
              {/* <NavbarLanguagesDropdown /> */}
              <NavbarUserDropdown />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;

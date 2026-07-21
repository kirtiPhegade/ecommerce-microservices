//import { useState } from "react";
//import { Link } from "react-router-dom";

import {
    AppBar,
    Box,
    Toolbar,
} from "@mui/material";

import {

} from "@mui/icons-material";

import { ANNOUNCEMENTS } from "../../../../common/constants/announcementConstants";
import AnnouncementBar from "../../module/AnnouncementBar";
//import { NAVIGATIONCONSTANTS } from "../../../../common/constants/navigationConstants";
import logo from "../../../../assets/icons/ArtVedaLogo.png";


const Header = () => {

    //const [open, setOpen] = useState(false);

    return (
        <>
            {/* Announcement Bar code goes here */}
            <AnnouncementBar announcements={ANNOUNCEMENTS} />
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    bgcolor: "#fff",
                    color: "#2E2A27",
                    borderBottom: "1px solid #EFE7DB",
                }}
            >
                <Toolbar
                    sx={{
                        maxWidth: "1000px",
                        width: "100%",
                        mx: "auto",
                        py: 1,
                    }}
                >
                    {/* Logo and Navigation code goes here */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                        }}
                    >
                        <Box
                            component="img"
                            src={logo}
                            alt="ArtVeda"
                            sx={{
                                height: 200,
                            }}
                        />
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;
import {
    Box,
} from "@mui/material";



import { ANNOUNCEMENTS } from "../../../../common/constants/announcementConstants";
import AnnouncementBar from "../../module/AnnouncementBar";

import NavMenu from "./NavMenu";
import Banner from "./Banner";

const Header = () => {

    //const [open, setOpen] = useState(false);

    return (
        <>
            <Box
                sx={{
                    position: "sticky",
                    top: 0,
                    zIndex: (theme) => theme.zIndex.appBar,
                }}
            >
                {/* Scrolls Away */}
                <AnnouncementBar announcements={ANNOUNCEMENTS} />
                <NavMenu />
                
            </Box>

            {/* Banner And Logo */}
            <Banner />
            

        </>
    );
}

export default Header;
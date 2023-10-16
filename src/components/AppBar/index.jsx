import Box from "@mui/material/Box";
import ModeSelect from "~/components/ModeSelect";
import AppsIcon from "@mui/icons-material/Apps";
import { ReactComponent as trelloLogo } from "~/assets/trello.svg";
import SvgIcon from "@mui/material/SvgIcon";
import { Typography } from "@mui/material";
import WorkSpaces from "./Menu/WorkSpaces";
import Recent from "./Menu/Recent";
import Starred from "./Menu/Starred";
import Templates from "./Menu/Templates";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const AppBar = () => {
  return (
    <Box
      px={2}
      sx={{
        height: (theme) => theme.workflow.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* AppBar left */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "primary.main" }} />
        {/* logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={trelloLogo}
            inheritViewBox
            sx={{ color: "primary.main" }}
          />
          <Typography
            variant="button"
            sx={{ fontWeight: "700", fontSize: "0.9rem" }}
            marginTop={"3px"}
          >
            WorkFlow
          </Typography>
        </Box>
        {/* dropdown menu */}
        <WorkSpaces />
        <Recent />
        <Starred />
        <Templates />

        {/* buton create */}
        <Button
          sx={{ textTransform: "capitalize", padding: "4px" }}
          variant="contained"
        >
          Create
        </Button>
      </Box>

      {/* AppBar right */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="filled-search"
          label="Search..."
          type="search"
          size="small"
        />
        <ModeSelect />
        <Badge color="secondary" variant="dot">
          <NotificationsNoneIcon sx={{ cursor: "pointer" }} />
        </Badge>
      </Box>
    </Box>
  );
};

export default AppBar;

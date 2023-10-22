import Box from "@mui/material/Box";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Chip from "@mui/material/Chip";
import PublicIcon from "@mui/icons-material/Public";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import img1 from "../../../assets/bery.jpg";
import img2 from "../../../assets/bery2.jpg";
import Button from "@mui/material/Button";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { formatLetter } from "~/utils/formatLetter";

const menuBoard = {
  color: "primary.main",
  bgcolor: "white",
  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
  "&:hover": {
    bgcolor: "primary.50",
  },
};

const BoardBar = ({ board }) => {
  return (
    <Box
      px={2}
      sx={{
        height: (theme) => theme.workflow.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflowX: "auto",
        borderTop: (theme) =>
          theme.palette.mode === "light"
            ? "1px solid #00bfa5"
            : "1px solid #7b1fa2",
        gap: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          sx={menuBoard}
          icon={<DashboardIcon />}
          label={board.title}
          clickable
        />
        <Chip
          sx={menuBoard}
          icon={<PublicIcon />}
          label={formatLetter(board?.type)}
          clickable
        />
        <Chip
          sx={menuBoard}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />
        <Chip sx={menuBoard} icon={<BoltIcon />} label="Automation" clickable />
        <Chip
          sx={menuBoard}
          icon={<FilterListIcon />}
          label="Filter"
          clickable
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          sx={{
            textTransform: "capitalize",
            display: "flex",
            alignItems: "flex-start",
            color: (theme) =>
              theme.palette.mode === "dark" ? "white" : "primary.main",
          }}
          variant="outlined"
          startIcon={<GroupAddIcon />}
        >
          Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: 16,
            },
          }}
        >
          <Avatar alt="bery" src={img1} />
          <Avatar alt="" src={img2} />
          <Avatar alt="Cindy Baker" src={img1} />
          <Avatar alt="Agnes Walker" src={img2} />
          <Avatar alt="Trevor Henderson" src={img1} />
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default BoardBar;

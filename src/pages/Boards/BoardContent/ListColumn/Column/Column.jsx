import Box from "@mui/material/Box";
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import AddCardIcon from "@mui/icons-material/AddCard";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import PanToolIcon from "@mui/icons-material/PanTool";
import ListCards from "./ListCards/ListCards";
import { mapOrder } from "~/utils/sortArray";

const Column = ({ column }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const sortCard = mapOrder(column?.cards, column?.cardOrderIds, "_id");

  return (
    <Box
      sx={{
        minWidth: "300px",
        maxWidth: "300px",
        height: "fit-content",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101204" : "#13151c",
        ml: 2,
        borderRadius: "6px",
        maxHeight: (theme) =>
          `calc(${theme.workflow.boardContentHeight} - ${theme.spacing(5)})`,
      }}
    >
      {/* header item box */}
      <Box
        sx={{
          height: (theme) => theme.workflow.boardColumnHeaderHeight,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1rem" }}>
          {column?.title}
        </Typography>
        <Box>
          <Tooltip title="More Option">
            <MoreHorizIcon
              sx={{ fontSize: "20px", cursor: "pointer" }}
              onClick={handleClick}
            />
          </Tooltip>

          <Menu
            id="basic-menu-workspaces"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button-workspaces",
            }}
            // sx={{ marginTop: "8px" }}
          >
            <MenuItem>
              <ListItemIcon>
                <AddCardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add new a card</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <DeleteForeverIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Remove this column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      {/* content item box */}
      <ListCards card={sortCard} />

      {/* footer item box */}
      <Box
        sx={{
          height: (theme) => theme.workflow.boardColumnFooterHeight,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button startIcon={<AddIcon />}>Add new a card</Button>
        <Tooltip title="Drag to move">
          <PanToolIcon sx={{ cursor: "pointer" }} />
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Column;

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
import { Button, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PanToolIcon from "@mui/icons-material/PanTool";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import imgBg from "../../../assets/bery2.jpg";
import GroupsIcon from "@mui/icons-material/Groups";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import AttachmentIcon from "@mui/icons-material/Attachment";

const COLUMN_HEADER_HEIGHT = "50px";
const COLUMN_FOOTER_HEIGHT = "56px";

const BoardContent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        height: (theme) => theme.workflow.boardContentHeight,

        // alignItems: "center",
        // borderTop: (theme) =>
        //   theme.palette.mode === "dark" ? "" : "1px solid #00bfa5",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "primary.main" : "",
        color: "white",
        p: "10px 0",
        width: "100%",
      }}
    >
      {/* color item : #22272B */}
      <Box
        sx={{
          bgcolor: "inherit",
          width: "100%",
          height: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          display: "flex",
        }}
      >
        {/* Box Column 1 */}
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
              `calc(${theme.workflow.boardContentHeight} - ${theme.spacing(
                5
              )})`,
          }}
        >
          {/* header item box */}
          <Box
            sx={{
              height: COLUMN_HEADER_HEIGHT,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "1rem" }}
            >
              Name
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.1,
              p: "0 5px",
              margin: "0 5px",
              overflowX: "hidden",
              overflowY: "auto",
              maxHeight: (theme) =>
                `calc(
                ${theme.workflow.boardContentHeight} - 
                ${theme.spacing(5)} -
                ${COLUMN_HEADER_HEIGHT} -
                ${COLUMN_FOOTER_HEIGHT}
                )`,
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#323B35",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#3f4d43",
              },
            }}
          >
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardMedia sx={{ height: 140 }} image={imgBg} />
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Beryniceeeee</Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  p: "0 3px 8px 3px",
                }}
              >
                <Button size="small" startIcon={<GroupsIcon />}>
                  30
                </Button>
                <Button size="small" startIcon={<InsertCommentIcon />}>
                  3
                </Button>
                <Button size="small" startIcon={<AttachmentIcon />}>
                  0
                </Button>
              </CardActions>
            </Card>

            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Content</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Content</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Content</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Content</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Content</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Content</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Content</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Content</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Content</Typography>
              </CardContent>
            </Card>
          </Box>
          {/* footer item box */}
          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
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
        {/* Box Column 2 */}
      </Box>
    </Box>
  );
};

export default BoardContent;

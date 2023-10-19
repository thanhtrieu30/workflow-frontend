import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import imgBg from "~/assets/bery2.jpg";
import GroupsIcon from "@mui/icons-material/Groups";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import AttachmentIcon from "@mui/icons-material/Attachment";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const ItemCard = ({ nocontent }) => {
  if (nocontent) {
    return (
      <Card sx={{ cursor: "pointer", overflow: "unset" }}>
        <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
          <Typography>content</Typography>
        </CardContent>
      </Card>
    );
  }
  return (
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
  );
};

export default ItemCard;

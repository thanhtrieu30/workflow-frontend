import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GroupsIcon from "@mui/icons-material/Groups";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import AttachmentIcon from "@mui/icons-material/Attachment";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
const ItemCard = ({ card }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card._id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
  };

  const removeActions = () => {
    return (
      !!card?.memberIds?.length ||
      !!card?.comments?.length ||
      !!card?.attachments?.length
    );
  };
  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      sx={{ cursor: "pointer", overflow: "unset" }}
    >
      {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} />}
      <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
        <Typography>{card.title}</Typography>
      </CardContent>
      {removeActions() && (
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            p: "0 3px 8px 3px",
          }}
        >
          {!!card?.memberIds?.length && (
            <Button size="small" startIcon={<GroupsIcon />}>
              {card?.memberIds?.length}
            </Button>
          )}
          {!!card?.comments?.length && (
            <Button size="small" startIcon={<InsertCommentIcon />}>
              {card?.comments?.length}
            </Button>
          )}
          {!!card?.attachments?.length && (
            <Button size="small" startIcon={<AttachmentIcon />}>
              {card?.attachments?.length}
            </Button>
          )}
        </CardActions>
      )}
    </Card>
  );
};

export default ItemCard;

import Box from "@mui/material/Box";

import ItemCard from "./ItemCard/ItemCard";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const ListCards = ({ card }) => {
  return (
    <SortableContext
      items={card?.map((c) => c._id)}
      strategy={verticalListSortingStrategy}
    >
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
                ${theme.workflow.boardColumnHeaderHeight} -
                ${theme.workflow.boardColumnFooterHeight}
                )`,
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#323B35",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#3f4d43",
          },
        }}
      >
        {card?.map((item) => (
          <ItemCard key={item._id} card={item} />
        ))}
      </Box>
    </SortableContext>
  );
};

export default ListCards;

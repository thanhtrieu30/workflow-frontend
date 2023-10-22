import Box from "@mui/material/Box";

import ItemCard from "./ItemCard/ItemCard";

const ListCards = ({ card }) => {
  return (
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
  );
};

export default ListCards;

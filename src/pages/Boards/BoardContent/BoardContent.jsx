import Box from "@mui/material/Box";
import ListColumn from "./ListColumn/ListColumn";
import { mapOrder } from "~/utils/sortArray";
import { DndContext } from "@dnd-kit/core";

const BoardContent = ({ board }) => {
  const sortColumn = mapOrder(board?.columns, board?.columnOrderIds, "_id");
  return (
    <DndContext>
      <Box
        sx={{
          height: (theme) => theme.workflow.boardContentHeight,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "primary.main" : "",
          color: "white",
          p: "10px 0",
          width: "100%",
        }}
      >
        {/* List column */}
        <ListColumn column={sortColumn} />

        {/* Column */}
      </Box>
    </DndContext>
  );
};

export default BoardContent;

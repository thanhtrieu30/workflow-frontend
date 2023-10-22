import Box from "@mui/material/Box";
import ListColumn from "./ListColumn/ListColumn";

const BoardContent = ({ board }) => {
  return (
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
      <ListColumn column={board.columns} />

      {/* Column */}
    </Box>
  );
};

export default BoardContent;

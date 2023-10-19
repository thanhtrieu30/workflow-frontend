import Box from "@mui/material/Box";
import ListColumn from "./ListColumn/ListColumn";

const BoardContent = () => {
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
      <ListColumn />

      {/* Column */}
    </Box>
  );
};

export default BoardContent;

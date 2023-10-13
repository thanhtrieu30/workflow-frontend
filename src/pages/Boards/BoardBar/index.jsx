import Box from "@mui/material/Box";

const BoardBar = () => {
  return (
    <Box
      sx={{
        height: (theme) => theme.workflow.boardBarHeight,
        display: "flex",
        alignItems: "center",
        backgroundColor: "primary.dark",
      }}
    >
      Boardbar testtt
    </Box>
  );
};

export default BoardBar;

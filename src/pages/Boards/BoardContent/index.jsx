import Box from "@mui/material/Box";

const BoardContent = () => {
  return (
    <Box
      sx={{
        height: (theme) =>
          `calc(100vh - ${theme.workflow.boardBarHeight} - ${theme.workflow.appBarHeight})`,
        display: "flex",
        alignItems: "center",
        backgroundColor: "primary.main",
      }}
    >
      content testttttttttttttttt
    </Box>
  );
};

export default BoardContent;

import Box from "@mui/material/Box";
import ModeSelect from "../ModeSelect";

const AppBar = () => {
  return (
    <Box
      sx={{
        height: (theme) => theme.workflow.appBarHeight,
        display: "flex",
        alignItems: "center",
        backgroundColor: "primary.main",
      }}
    >
      <ModeSelect />
    </Box>
  );
};

export default AppBar;

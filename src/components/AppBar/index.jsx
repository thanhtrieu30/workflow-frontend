import Box from "@mui/material/Box";
import ModeSelect from "~/components/ModeSelect";

const AppBar = () => {
  return (
    <Box
      sx={{
        height: (theme) => theme.workflow.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // backgroundColor: "primary.main",
      }}
    >
      <Box>WorkFlow</Box>
      <Box>
        <ModeSelect />
      </Box>
    </Box>
  );
};

export default AppBar;

import { useColorScheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    const selectedMode = event.target.value;
    setMode(selectedMode);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="id-mode-select-light-dark">Mode</InputLabel>
      <Select
        labelId="label-mode-select-light-dark"
        id="id-mode-select-light-dark"
        value={mode}
        label="mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <LightModeIcon fontSize="small" /> Light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <NightsStayIcon fontSize="small" /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SettingsBrightnessIcon fontSize="small" /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
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
      <Box
        sx={{
          height: (theme) => theme.workflow.boardBarHeight,
          display: "flex",
          alignItems: "center",
          backgroundColor: "primary.dark",
        }}
      >
        Boardbar
      </Box>
      <Box
        sx={{
          height: (theme) =>
            `calc(100vh - ${theme.workflow.boardBarHeight} - ${theme.workflow.appBarHeight})`,
          display: "flex",
          alignItems: "center",
          backgroundColor: "primary.main",
        }}
      >
        content
      </Box>
    </Container>
  );
}

export default App;

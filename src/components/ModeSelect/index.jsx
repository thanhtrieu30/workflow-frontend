import { useColorScheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Box from "@mui/material/Box";

const ModeSelect = () => {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    const selectedMode = event.target.value;
    setMode(selectedMode);
  };
  return (
    <FormControl sx={{ minWidth: 100 }} size="small">
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
      </Select>
    </FormControl>
  );
};

export default ModeSelect;

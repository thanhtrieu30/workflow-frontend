import Box from "@mui/material/Box";
import Column from "./Column/Column";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const ListColumn = () => {
  return (
    <Box
      sx={{
        bgcolor: "inherit",
        width: "100%",
        height: "100%",
        overflowX: "auto",
        overflowY: "hidden",
        display: "flex",
      }}
    >
      {/* Box Column */}
      <Column />
      <Column />

      {/* Add another list */}
      <Box
        sx={{
          minWidth: "200px",
          maxWidth: "200px",
          mx: 2,
          bgcolor: "#ffffff3d",
          height: "fit-content",
          borderRadius: "10px",
        }}
      >
        <Button
          startIcon={<AddIcon />}
          sx={{
            color: "white",
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            pl: 1.5,
            py: 1,
            borderRadius: "10px",
            textTransform: "none",
            "&:hover": { bgcolor: "#A6C5E229" },
          }}
        >
          Add another list
        </Button>
      </Box>
    </Box>
  );
};

export default ListColumn;

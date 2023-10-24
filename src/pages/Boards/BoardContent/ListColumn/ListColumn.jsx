import Box from "@mui/material/Box";
import Column from "./Column/Column";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

const ListColumn = ({ column }) => {
  return (
    <SortableContext
      items={column?.map((c) => c._id)}
      strategy={horizontalListSortingStrategy}
    >
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
        {column.map((column) => (
          <Column key={column._id} column={column} />
        ))}

        {/* Add another list */}
        <Box
          sx={{
            minWidth: "200px",
            maxWidth: "200px",
            mx: 2,
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#ffffff3d" : "primary.main",
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
    </SortableContext>
  );
};

export default ListColumn;

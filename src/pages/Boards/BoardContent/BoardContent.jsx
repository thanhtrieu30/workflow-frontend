import Box from "@mui/material/Box";
import ListColumn from "./ListColumn/ListColumn";
import { mapOrder } from "~/utils/sortArray";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import { cloneDeep } from "lodash";
import Column from "./ListColumn/Column/Column";
import ItemCard from "./ListColumn/Column/ListCards/ItemCard/ItemCard";

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
  CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD",
};

const BoardContent = ({ board }) => {
  const [activeDragItemData, setActiveDragItemData] = useState(null);
  const [activeLayout, setActiveLayout] = useState(null);

  const mouseSensor = useSensor(PointerSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(PointerSensor, {
    // Press delay of 250ms, with tolerance of 5px of movement
    activationConstraint: {
      delay: 20,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  const [orderedColumns, setOrderedColumn] = useState([]);

  useEffect(() => {
    setOrderedColumn(mapOrder(board?.columns, board?.columnOrderIds, "_id"));
  }, [board]);

  // tìm column theo card id
  const findColumnByCardId = (cardId) => {
    return orderedColumns.find((column) =>
      column?.cards?.map((card) => card._id)?.includes(cardId)
    );
  };

  const handleDragStart = (e) => {
    setActiveDragItemData(
      e?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    );
    setActiveLayout(e?.active?.data?.current);
  };

  const handleDragOver = (e) => {
    // sẽ không làm gì khi kéo column
    if (activeDragItemData === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return;
    // nếu kéo card thì xử lý thêm để có thể kéo card qua lại giữa các column

    const { active, over } = e;

    // nếu không tồn tại active hoặc over thì không làm gì (khi kéo ra khỏi phạm vi)
    if (!active || !over) return;

    // đổi tên id và data của active
    const {
      id: activeCardId,
      data: { current: activeCardData },
    } = active;
    // đổi tên id của over
    const { id: overCardId } = over;

    // tìm column theo card id
    const activeColumn = findColumnByCardId(activeCardId);
    const overColumn = findColumnByCardId(overCardId);
    if (!activeColumn || !overColumn) return;

    //xu ly logic khi keo qua column khac
    // nếu id cột này khác id cột kia
    if (activeColumn._id !== overColumn._id) {
      setOrderedColumn((prevColumn) => {
        // tim vi tri index của cái overCard trong column kéo tới
        const overCardIndex = overColumn?.cards?.findIndex(
          (card) => card._id === overCardId
        );

        // logic lấy ra vị trí card index
        let newCardIndex;
        const isBelowOverItem =
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;
        const modifier = isBelowOverItem ? 1 : 0;
        newCardIndex =
          overCardIndex >= 0
            ? overCardIndex + modifier
            : overColumn?.cards?.length + 1;

        // clone mảng orderdColumnState cũ ra một cái mới để xử lý data rồi return - cập nhập lại orderdColumnState mới
        const nextColumn = cloneDeep(prevColumn);
        const nextActiveColumn = nextColumn.find(
          (column) => column._id === activeColumn._id
        );
        const nextOverColumn = nextColumn.find(
          (column) => column._id === overColumn._id
        );

        // logic chuyển card từ column này sang column mới
        if (nextActiveColumn) {
          // xóa card ở column active
          nextActiveColumn.cards = nextActiveColumn.cards.filter(
            (card) => card._id !== activeCardData
          );
          // cap nhap lai mang dữ liệu
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
            (card) => card._id
          );
        }
        if (nextOverColumn) {
          // kiem tra xem có tồn tại card dang kéo ở column chưa , nếu có thì xóa nó trc
          nextOverColumn.cards = nextOverColumn.cards.filter(
            (card) => card._id !== activeCardId
          );
          // them card dang kéo vào vi tri index mới
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(
            newCardIndex,
            0,
            activeCardData
          );
          // cap nhap lai mảng
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
            (card) => card._id
          );
        }

        return nextColumn;
      });
    }
  };

  const handleDragEnd = (e) => {
    const { active, over } = e;
    if (!over) return null;
    if (active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex((c) => c._id === active.id);
      const newIndex = orderedColumns.findIndex((c) => c._id === over.id);
      const dndOrderedColumn = arrayMove(orderedColumns, oldIndex, newIndex);
      // const dndOrderedColumnIds = dndOrderedColumn.map((c) => c._id);
      // console.log(dndOrderedColumnIds);
      setOrderedColumn(dndOrderedColumn);
    }

    setActiveDragItemData(null);
  };

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
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
        <ListColumn column={orderedColumns} />
        <DragOverlay dropAnimation={dropAnimation}>
          {!activeDragItemData && null}
          {activeDragItemData === "ACTIVE_DRAG_ITEM_TYPE_COLUMN" && (
            <Column column={activeLayout} />
          )}
          {activeDragItemData === "ACTIVE_DRAG_ITEM_TYPE_CARD" && (
            <ItemCard card={activeLayout} />
          )}
        </DragOverlay>
        {/* Column */}
      </Box>
    </DndContext>
  );
};

export default BoardContent;

import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/UI/Header";
import PlanItem from "./components/UI/PlanItem";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import arm from "./img/arm.png";
import "./Dnd.scss";

const itemsFromBackend = [
  { id: uuid(), name: "벤치프레스", target: "가슴" },
  { id: uuid(), name: "스쿼트", target: "하체" },
  { id: uuid(), name: "데드리프트", target: "하체" },
  { id: uuid(), name: "숄더프레스", target: "하체" },
];

const columnsFromBackend = {
  [uuid()]: {
    name: "운동 종목",
    items: itemsFromBackend,
  },
  [uuid()]: {
    name: "운동 계획",
    items: [],
  },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function Dnd() {
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <div className="plan-page">
      <Header />
      <div className="plan-body">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div className="plan-list" key={columnId}>
                <h2>{column.name}</h2>
                <div className="plan-boxs">
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className="plan-lists"
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "#fff",
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      className="plan-item"
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        backgroundColor: snapshot.isDragging
                                          ? "#32a89d"
                                          : "#3bc6b7",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      <img src={arm} alt="" />
                                      <div className="item-des">
                                        <span>{item.name}</span>
                                        <span>{item.target}</span>
                                      </div>
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
}

export default Dnd;

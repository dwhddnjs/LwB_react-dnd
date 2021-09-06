import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../UI/Header";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import arm from "../../img/arm.png";
import "./PlanPage.scss";

const workOutList = [
  { id: uuid(), name: "벤치프레스", target: "가슴" },
  { id: uuid(), name: "스쿼트", target: "하체" },
  { id: uuid(), name: "데드리프트", target: "하체" },
  { id: uuid(), name: "숄더프레스", target: "하체" },
];

const workOutTitle = {
  [uuid()]: {
    name: "운동 종목",
    items: workOutList,
  },
  [uuid()]: {
    name: "운동 계획",
    items: [],
  },
};

const onDragEnd = (result, list, setList) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const srcList = list[source.droppableId];
    const destList = list[destination.droppableId];
    const srcItems = [...srcList.items];
    const destItems = [...destList.items];
    const [removed] = srcItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setList({
      ...list,
      [source.droppableId]: {
        ...srcList,
        items: srcItems,
      },
      [destination.droppableId]: {
        ...destList,
        items: destItems,
      },
    });
  } else {
    const lists = list[source.droppableId];
    const copiedItems = [...lists.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setList({
      ...list,
      [source.droppableId]: {
        ...lists,
        items: copiedItems,
      },
    });
  }
};

function PlanPage() {
  const [list, setList] = useState(workOutTitle);

  return (
    <div className="plan-page">
      <Header />
      <div className="plan-body">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, list, setList)}
        >
          {Object.entries(list).map(([id, list], index) => {
            return (
              <div className="plan-list" key={id}>
                <h2>{list.name}</h2>
                <div className="plan-boxs">
                  <Droppable droppableId={id} key={id}>
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
                          {list.items.map((item, index) => {
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

export default PlanPage;

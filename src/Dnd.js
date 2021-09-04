import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/UI/Header";
import PlanItem from "./components/UI/PlanItem";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./../src/components/PlanPage/PlanPage.scss";

function Dnd() {
  const item = [
    {
      id: 1,
      name: "벤치프레스",
      target: "가슴",
    },
    {
      id: 2,
      name: "스쿼트",
      target: "하체",
    },
    {
      id: 3,
      name: "데드리프트",
      target: "등",
    },
    {
      id: 4,
      name: "숄더프레스",
      target: "어깨",
    },
  ];

  return (
    <div className="plan">
      <Header />
      <body>
        <section>
          <div className="list-container">
            <span>운동 종목</span>
            <DragDropContext>
              <Droppable droppableId="item">
                {(provided) => (
                  <div
                    className="list-content"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {item.map(({ id, name }, index) => (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                          >
                            {name}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>

          <div className="plan-container">
            <span>운동 계획</span>
            <div className="plan-content"></div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default Dnd;

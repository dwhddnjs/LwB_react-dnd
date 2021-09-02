import React from "react";
import Header from "../UI/Header";
import "./PlanPage.scss";

function PlanPage() {
  return (
    <div className="plan">
      <Header />
      <body>
        <section>
          <div className="list-container">
            <span>운동 종목</span>
            <div className="list-content"></div>
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

export default PlanPage;

import React from "react";
import "./HomePage.scss";
import Header from "../UI/Header";

function HomePage() {
  return (
    <body>
      <Header />
      <section>
        <div>
          <div>당신의 운동 루틴은 ?</div>
          <p>
            다양한 운동종목들을 마우스 드래그로 추가하여 삭제하여 본인에게 맞는
            운동루틴을 계획 해보아요.
          </p>
          <button>Get Started</button>
        </div>
        <div>
          <img src="" alt="뭐 대충 gif" />
        </div>
      </section>
    </body>
  );
}

export default HomePage;

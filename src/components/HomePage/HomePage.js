import React from "react";
import "./HomePage.scss";
import Header from "../UI/Header";
import dead from "../../img/dead.jpeg";

function HomePage() {
  return (
    <div className="home">
      <Header />
      <body>
        <section>
          <div className="home-left">
            <h3>당신의 운동 루틴은 ?</h3>
            <p>
              다양한 웨이트 운동 종목과 운동 세트수를 정한 후 마우스 드래그로
              추가 삭제하여 본인에게 맞는 체계적인 운동루틴을 계획하고 실천하여
              근성장을 이뤄봅시다 .
            </p>
            <button>Get Started</button>
          </div>
          <div className="home-right">
            <img src={dead} alt="뭐 대충 gif" />
          </div>
        </section>
      </body>
    </div>
  );
}

export default HomePage;

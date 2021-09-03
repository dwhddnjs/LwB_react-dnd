import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../UI/Header";
import "./PlanPage.scss";

function PlanPage() {
  const API = process.env.REACT_APP_API_KEY;

  const [item, setItem] = useState();

  const workout = () => {
    axios.get("https://wger.de/api/v2/exercise/").then((el) => {
      console.log(el.data.results.slice(0, 3));
      setItem(el.data.results);
    });
  };

  useEffect(() => {
    workout();
  }, []);

  return (
    <div className="plan">
      <Header />
      <body>
        <section>
          <div className="list-container">
            <span>운동 종목</span>
            <div className="list-content">
              {item && item.map((el) => <div key={el.id}>{el.name}</div>)}
            </div>
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

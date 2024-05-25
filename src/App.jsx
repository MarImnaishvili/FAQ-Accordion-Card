import { useState } from "react";
import "./App.css";
import logoo from "/images/illustration-woman-online-mobile.svg";
import desktop from "/images/bg-pattern-desktop.svg";
import { faqData } from "./data";
import Questions from "./components/Questions";

function App() {
  const [isActive, setIsActive] = useState(null);

  return (
    <>
      <div className="mainContainer">
        <div className="imgSection">
          <img className="logoo" src={logoo} alt="accordionLogo"></img>
          <img className="desktop" src={desktop} alt="accordionLogo"></img>
        </div>
        <div className="questionSection">
          <h1>FAQ</h1>
          <div>
            {faqData.map((quest, index) => (
              <Questions
                question={quest.question}
                answer={quest.answer}
                key={index}
                index={index}
                isActive={isActive}
                setIsActive={setIsActive}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

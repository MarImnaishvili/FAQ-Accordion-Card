import "./Questions.css";
import arrowDown from "/images/icon-arrow-down.svg";

// eslint-disable-next-line react/prop-types
function Questions({ question, answer, isActive, setIsActive, index }) {
  return (
    <div>
      <div
        className="questionDiv"
        onClick={
          isActive === index
            ? () => setIsActive(null)
            : () => setIsActive(index)
        }
      >
        <h3
          style={
            isActive === index
              ? { color: "hsl(237, 12%, 33%)", fontWeight: "700" }
              : { color: "hsl(240, 6%, 50%)" }
          }
        >
          {question}
        </h3>
        <img
          className="arrowDown"
          src={arrowDown}
          alt="arrowDown"
          style={isActive === index ? { transform: "rotate(180deg)" } : null}
        ></img>
      </div>
      {isActive === index ? <p>{answer}</p> : null}
      <div className="borderBottom"></div>
    </div>
  );
}

export default Questions;

// transform: rotate(45deg);

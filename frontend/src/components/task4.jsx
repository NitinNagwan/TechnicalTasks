import "./task4.css";

function Task() {
  return (
    <div className="app">
      <div style={{ columnCount: "2", gap: "0px" }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <div
            style={{
              width: "300px",
              height: "100px",
              background: index % 2 == 0 ? "#df9d9b" : "transparent",
              border: index % 2 === 0 ? "2px solid #bf8684" : "2px solid #bf8684"
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Task;

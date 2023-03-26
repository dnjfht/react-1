import React from "react";
import "./App.css";

function App() {
  let name = "min";

  // return 안에서 if문 선언 불가
  // if문 대신 삼항연산자를 쓸 수 있음

  return (
    <div
      style={{
        width: "360px",
        padding: "1.6rem",
        boxSizing: "border-radius",
        border: "1px solid #ccc",
        borderRadius: "0.8rem",
        textAlign: "center",
        margin: "4rem auto",
        backgroundColor: "rgba(255,0,108,0.8)",
      }}
    >
      <div className="title" style={{ borderBottom: "1px solid #ccc" }}>
        <h1 style={{ fontSize: "1.6rem", color: "#fff", fontWeight: "500" }}>
          안녕하세요!
        </h1>
      </div>

      <div
        className="input_name"
        style={{
          textAlign: "left",
          padding: "1rem 0",
          boxSizing: "border-box",
        }}
      >
        <p style={{ fontSize: "0.8rem", color: "#fff" }}>
          이름을 입력해주세요.
        </p>
        <input
          type="text"
          style={{
            width: "100%",
            height: "46px",
            padding: "1rem",
            boxSizing: "border-box",
            border: "1px solid #fff",
            borderRadius: "0.4rem",
            outline: "none",
            backgroundColor: "transparent",
          }}
        />
      </div>
    </div>
  );
}

export default App;

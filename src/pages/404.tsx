import Router from "next/router";

export default function Custom404() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "inherit",
        gap: "1em",
      }}
    >
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontWeight: 300,
          gap: "10px",
          width: "fit-content",
        }}
      >
        <ins style={{ fontSize: "1.2em" }}>404</ins> - Page Not Found
      </h2>
      <ins
        style={{ color: "#2990ff", fontSize: "1.2em", cursor: "pointer" }}
        onClick={() => Router.push("/")}
      >
        Go back
      </ins>
    </div>
  );
}

import React from "react";

export default function Title({ level, text }) {
  return (
    <>
      {level === "h1" && <h1 className="font-bold text-xl">{text}</h1>}
      {level === "h2" && <h2>{text}</h2>}
      {level === "h3" && <h3>{text}</h3>}
      {level === "h4" && <h4 className="font-bold text-sm">{text}</h4>}
    </>
  );
}

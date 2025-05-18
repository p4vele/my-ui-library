import React from "react";

const MyButton = ({
  label,
  onClick,
  backgroundColor = "#007bff",
  color = "#fff",
}) => {
  const style = {
    padding: "10px 20px",
    backgroundColor,
    color,
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <button style={style} onClick={onClick}>
      {label}
    </button>
  );
};

export default MyButton;

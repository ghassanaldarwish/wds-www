import React from "react";

export default function Gitlab({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      className={className}
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path fill="#e53935" d="M24 43L16 20 32 20z"></path>
      <path fill="#ff7043" d="M24 43L42 20 32 20z"></path>
      <path fill="#e53935" d="M37 5L42 20 32 20z"></path>
      <path fill="#ffa726" d="M24 43L42 20 45 28z"></path>
      <path fill="#ff7043" d="M24 43L6 20 16 20z"></path>
      <path fill="#e53935" d="M11 5L6 20 16 20z"></path>
      <path fill="#ffa726" d="M24 43L6 20 3 28z"></path>
    </svg>
  );
}
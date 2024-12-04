
import React from "react";

export const Footer = () => {
  return (
    <div className="p-4 flex items-center justify-center w-full bg-blue-900 text-xs text-neutral-500 border-t border-neutral-100">
      <span className="font-semibold">{new Date().getFullYear()} </span>
      &#8212; Built by Tyler Wade
    </div>
  );
};

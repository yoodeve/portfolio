"use client";

import React from "react";

export default function Background({ children }) {
  return (
    <>
      <div className="bg-[#393646] w-screen h-screen relative overflow-y-auto">
        {children}
      </div>
    </>
  );
}

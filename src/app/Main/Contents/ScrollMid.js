import React from "react";
import { LabTitle } from "./LabTitle";
import { LabContent } from "./LabContent";
import { HHTitle } from "./HHTitle";
import { HHContent } from "./HHContent";

export const ScrollMid = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="grid grid-cols-2 grid-rows-3 justify-around  p-5">
        <HHTitle />
        <HHContent />
        <LabTitle />
        <LabContent />
      </div>
    </div>
  );
};

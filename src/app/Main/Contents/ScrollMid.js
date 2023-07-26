import React from "react";
import { LabTitle } from "./LabTitle";
import { LabContent } from "./LabContent";
import { HHTitle } from "./HHTitle";
import { HHContent } from "./HHContent";
import { KoritTitle } from "./KoritTitle";
import { KoritContent } from "./KoritContent";

export const ScrollMid = () => {
  return (
    <div className="w-full pt-20 flex justify-center items-center">
      <div className="grid grid-cols-2 grid-rows-3 justify-around p-5">
        <HHTitle />
        <HHContent />
        <KoritTitle />
        <KoritContent />
        <LabTitle />
        <LabContent />
      </div>
    </div>
  );
};

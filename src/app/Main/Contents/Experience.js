import React from "react";
import Javascript from "@/SkillIcons/javascript.svg";
import Html from "@/SkillIcons/html5.svg";
import Css3 from "@/SkillIcons/css3.svg";
import ReactIcon from "@/SkillIcons/react.svg";
import ReduxIcon from "@/SkillIcons/redux.svg";
import StyleCompo from "@/SkillIcons/styledcomponents.svg";
import Wrapper from "../Wrapper";

export const Experience = () => {
  return (
    <div className="w-full mx-auto h-5/10 flex justify-around items-center flex-row">
      <div className="flex justify-start w-auto m-8 flex-col">
        <div className="text-3xl">Used to</div>
        <div className="text">이런 것을 해봤어요!</div>
      </div>
      <div>
        <div className="flex flex-col justify-end mr-12 w-[100%]">
          <div className="flex w-[100%] justify-between py-1">
            <div className="decoration-solid underline">deploy</div>
            <div>AWS(EC2, Amplify, S3) | Github-actions</div>
          </div>
          <div className="flex w-[100%] justify-between py-1">
            <div className="decoration-solid underline">language</div>
            <div>Javascript | Html | Css | Java</div>
          </div>
          <div className="flex w-[100%] justify-between py-1">
            <div className="decoration-solid underline">framework</div>
            <div>React.js | Angular.js | Servlet | SpringBoot</div>
          </div>
          <div className="flex w-[100%] justify-between py-1">
            <div className="decoration-solid underline">library</div>
            <div>
              <div className="flex justify-end">Redux | Recoil </div>
              <div> antd | styled-component | emotion/react | tailwind </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

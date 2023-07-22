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
    <div className="w-4/5 mx-auto h-5/10 flex justify-around items-center flex-col">
      <div className="flex justify-start w-auto m-8 flex-col">
        <div className="text-3xl">Used to use</div>
        <div className="text-3xl">이런 것을 해봤어요!</div>
      </div>
      <div>
        <div className="flex justify-end mr-12 w-auto">
          <div>
            <div className="grid grid-cols-2 grid-rows-3 gap-x-16 gap-y-16">
              <div className="flex justify-evenly">
                <div className="text-2xl">Javascript</div>
                <div className="ml-4">
                  <Javascript className="w-6 text-2xl" stroke="#F7DF1E" />
                </div>
              </div>
              <div className="flex justify-evenly">
                <div className="text-2xl">html</div>
                <div className="ml-4">
                  <Html className="w-6 text-2xl" stroke="#E34F26" />
                </div>
              </div>
              <div className="flex justify-evenly">
                <div className="text-2xl">css3</div>
                <div className="ml-4">
                  <Css3 className="w-6 text-2xl" stroke="#1572B6" />
                </div>
              </div>

              <div className="flex justify-evenly">
                <div className="text-2xl">React</div>
                <div className="ml-4">
                  <ReactIcon className="w-6 text-2xl" stroke="#61DAFB" />
                </div>
              </div>
              <div className="flex justify-evenly">
                <div className="text-2xl">Redux</div>
                <div className="ml-4">
                  <ReduxIcon className="w-6 text-2xl" stroke="#764ABC" />
                </div>
              </div>
              <div className="flex justify-evenly">
                <div className="text-2xl">styledcomponents / emotion</div>
                <div className="ml-4">
                  <StyleCompo className="w-6 text-2xl" stroke="#DB7093" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

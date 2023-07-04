"use client";

import React from "react";
import Wrapper from "../Wrapper";
import Javascript from "@/SkillIcons/javascript.svg";
import Html from "@/SkillIcons/html5.svg";
import Css3 from "@/SkillIcons/css3.svg";
import ReactIcon from "@/SkillIcons/react.svg";
import ReduxIcon from "@/SkillIcons/redux.svg";
import StyleCompo from "@/SkillIcons/styledcomponents.svg";
import { RightCircleOutlined } from "@ant-design/icons";
import Company from "./Company";

export default function Stack() {
  return (
    <Wrapper>
      <div className="w-screen text-white flex justify-center">
        <div className="flex w-3/4">
          <div className="flex justify-center flex-col">
            <div className="flex justify-evenly items-center w-1/2 my-4">
              <RightCircleOutlined className="text-2xl" />
              <div className="text-2xl">Used to use</div>
              <div className="text-2xl">이런 것을 써봤어요!</div>
            </div>
            <div className="flex justify-end  w-1/4">
              <div>
                <div className="grid grid-cols-2 grid-rows-3 gap-x-10 gap-y-10">
                  <div className="flex items-center justify-evenly">
                    <div className="text-6">Javascript</div>
                    <div className="ml-4">
                      <Javascript className="w-6" stroke="white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-evenly">
                    <div className="text-6">html</div>
                    <div className="ml-4">
                      <Html className="w-6" stroke="white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-evenly">
                    <div className="text-6">css3</div>
                    <div className="ml-4">
                      <Css3 className="w-6" stroke="white" />
                    </div>
                  </div>

                  <div className="flex items-center justify-evenly">
                    <div className="text-6">React</div>
                    <div className="ml-4">
                      <ReactIcon className="w-6" stroke="white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-evenly">
                    <div className="text-6">Redux</div>
                    <div className="ml-4">
                      <ReduxIcon className="w-6" stroke="white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-evenly">
                    <div className="text-6">styledcomponents / emotion</div>
                    <div className="ml-4">
                      <StyleCompo className="w-6" stroke="white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Company />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

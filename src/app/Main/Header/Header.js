"use client";

import {
  MenuFoldOutlined,
  GithubOutlined,
  BoldOutlined,
  MailOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
// import { styled } from "styled-components";
import { Drawer, message } from "antd";
import Wrapper from "../Wrapper";

export default function Header() {
  const handleCopyClipBoard = () => {
    try {
      navigator.clipboard.writeText("yooj.stud@gmail.com");
      message.info("클립보드에 이메일주소가 복사되었어요 !");
    } catch (error) {
      message.info("클립보드 복사에 실패하였습니다.");
    }
  };

  return (
    <Wrapper>
      <div className="flex w-full h-16 fixed top-0 bg-[#222] text-white justify-end items-center">
        <div className="flex w-4/5 text-white justify-between items-center">
          <div className="flex w-40 justify-evenly items-center">
            <a href="https://github.com/yoodeve">
              <GithubOutlined className="text-xl" />
            </a>
            <a href="https://velog.io/@yoodeve">
              <BoldOutlined className="text-xl" />
            </a>
            <MailOutlined onClick={handleCopyClipBoard} className="text-xl" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

"use client";

import { GithubOutlined, BoldOutlined, MailOutlined } from "@ant-design/icons";
import React, { useState } from "react";
// import { styled } from "styled-components";
import { Drawer, Tooltip, message } from "antd";
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
      <div className="flex w-auto h-16 fixed z-0 top-0 bg-[#222] text-white justify-end items-center">
        <div className="flex w-4/5 text-white justify-between items-center">
          <div className="flex w-40 justify-evenly items-center">
            <Tooltip title="gitHub profile">
              <a href="https://github.com/yoodeve">
                <GithubOutlined className="text-xl" />
              </a>
            </Tooltip>
            <Tooltip title="Velog">
              <a href="https://velog.io/@yoodeve">
                <BoldOutlined className="text-xl" />
              </a>
            </Tooltip>
            <Tooltip title="email 복사">
              <MailOutlined onClick={handleCopyClipBoard} className="text-xl" />
            </Tooltip>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

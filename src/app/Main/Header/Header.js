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
import { Drawer } from "antd";
import Wrapper from "../Wrapper";

export default function Header() {
  const [menufold, setMenuFold] = useState(false);

  const showDrawer = () => {
    setMenuFold(true);
  };
  const onClose = () => {
    setMenuFold(false);
  };

  // const RotateHolder = styled.div`
  //   position: relative;
  // `;

  // const Icon = styled(MenuFoldOutlined)`
  //   position: relative;
  //   left: ${({ menufold }) => (menufold ? "340px" : "40px")};

  //   display: flex;
  //   font-size: 1.2rem;
  //   animation: ${({ menufold }) =>
  //     menufold ? "spin 0.5s linear" : "spin 0.5s linear"};
  //   transform: ${({ menufold }) =>
  //     menufold ? "rotate(0deg)" : "rotate(180deg)"};

  //   @keyframes spin {
  //     0% {
  //       transform: rotate(${menufold ? "180deg" : "0"});
  //     }
  //     100% {
  //       transform: rotate(${menufold ? "0" : "180deg"});
  //     }
  //   }
  // `;

  return (
    <Wrapper>
      <div className="flex w-full text-white justify-center items-center">
        <Drawer
          placement="left"
          onClose={onClose}
          open={menufold}
          mask={false}
          width="300"
        />
        <div className="flex w-4/5 text-white justify-between items-center">
          <div className=" justify-between items-center">
            <MenuFoldOutlined className="text-xl" onClick={showDrawer} />
          </div>
          <div className="flex w-40 justify-evenly items-center">
            <GithubOutlined className="text-xl" />
            <BoldOutlined className="text-xl" />
            <MailOutlined className="text-xl" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
// const HeaderDisplay = styled.div`
//   display: flex;
// `;
// const HeaderContainer = styled.div`
//   width: 100%;
//   height: 1.2rem;
//   display: flex;
//   justify-content: space-between;
//   padding: 40px 60px 10px;
// `;

// const IconWrapper = styled.div`
//   width: 7vw;
//   display: flex;
//   justify-content: space-between;
//   font-size: 1.2rem;
// `;

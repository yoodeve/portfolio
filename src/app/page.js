import React from "react";
import Background from "./Main/Background";
import Header from "./Main/Header/Header";
import Stack from "./Main/Contents/index";

export default function Home() {
  return (
    <Background>
      <Header />
      <Stack />
    </Background>
  );
}

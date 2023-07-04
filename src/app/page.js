import React from "react";
import Background from "./Main/Background";
import Header from "./Main/Header/Header";
import Info from "./Main/Contents/Info";
import Stack from "./Main/Contents/Stack";

export default function Home() {
  return (
    <Background>
      <Header />
      <Info />
      <Stack />
    </Background>
  );
}

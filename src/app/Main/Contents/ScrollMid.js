import React from "react";
import { LabTitle } from "./LabTitle";
import { LabContent } from "./LabContent";
import { HHTitle } from "./HHTitle";
import { HHContent } from "./HHContent";
import { KoritTitle } from "./KoritTitle";
import { KoritContent } from "./KoritContent";
import Footer from "./Footer";

export const ScrollMid = () => {
 return (
  <>
   <div className="w-full mx-auto h-5/10 flex justify-around items-center flex-row">
    <div className="text-2xl ml-28 mr-52 my-40">INTRODUCTION</div>
    <div className="mr-10">
     <p className="text-lg text-[pink]">
      미약하게 시작하고 창대하게 끝내는 한유정입니다!
     </p>
     <p>
      부트캠프 항해부터 1년차 개발자가 된 현재까지, 주도적인 개발을 하였습니다.
      <br />
      <br />
      1개의 스타트업에서 선박 운항 관리 시스템을 리뉴얼 한 경험이 있습니다.
      <br />
      비록 신입이었으나 제가 개발하는 부분에 있어 의견이 필요한 부분이 있다
      생각될 때,
      <br />
      확실한 의견을 공유하였답니다.
      <br />
      <br />
      또한 제가 주도적으로 계획하여 기술공유회의에서 새로운 기술들을 나누고,{" "}
      <br />
      기술정리문서 또한 함께하였습니다.
      <br />
      이렇게 성장하고있는 저와 함께하시지 않으시겠습니까?
     </p>
    </div>
   </div>
   <div className="w-auto mx-auto pt-20 flex flex-col justify-center items-center">
    <div className="grid grid-cols-2 grid-rows-3 justify-around">
     <LabTitle />
     <LabContent />
     <HHTitle />
     <HHContent />
     <KoritTitle />
     <KoritContent />
    </div>
   </div>
   <Footer />
  </>
 );
};

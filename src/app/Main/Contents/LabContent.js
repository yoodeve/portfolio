import React from "react";

export const LabContent = () => {
  return (
    <div>
      <div>
        <span className="text-2xl">재직 기간: </span>
        <span className="text-2xl">8. 2022 to 5. 2023</span>
      </div>
      <div>
        <span className="text-xl text-[#666]">Employment Period: </span>
        <span className="text-xl text-[#666]">Aug 2022 to May. 2023</span>
      </div>
      <div>
        <span className="text-xl">location: </span>
        <span className="text-xl">Busan, South Korea</span>
      </div>
      <div>
        <span className="text-2xl">What I Experience</span>
        <div className="my-2 text-xl">
          <p>Angular.js 의 코드를 React.js로 마이그레이션</p>
          <p className="text-[#666]">
            Migrate code from Angular.js to React.js
          </p>
          <p>Nov.2022 ~ Dec.2022</p>
        </div>
        <div className="my-2 text-xl">
          <p>기존 선박 항해 관리 프로그램 리뉴얼</p>
          <p className="text-[#666]">Renew Fleet Management Solution</p>
          <p>REST-API 사용을 통한 데이터 동기화와 CRUD</p>
          <p className="text-[#666]">
            CRUD and Data Synchronization with REST-API
          </p>
          <p>전역 상태관리를 통한 컴포넌트 복잡도 개선</p>
          <p className="text-[#666]">
            Simple Component Tree with Redux/Redux-toolkit
          </p>
          <p>재사용성을 위한 컴포넌트 모듈화</p>
          <p className="text-[#666]">Modulize Component for the use of Reuse</p>
          <p>Jan.2023 ~ May.2023</p>
        </div>
      </div>
    </div>
  );
};

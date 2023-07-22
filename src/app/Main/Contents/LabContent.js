import React from "react";

export const LabContent = () => {
  return (
    <div>
      <div>
        <span className="text-2xl">재직 기간: </span>
        <span className="text-2xl">8. 2022 to 5. 2023</span>
      </div>
      <div>
        <span className="text-2xl">Employment Period: </span>
        <span className="text-2xl">Aug 2022 to May. 2023</span>
      </div>
      <div>
        <span className="text-xl">location: </span>
        <span className="text-xl">Busan, South Korea</span>
      </div>
      <div>
        <span className="text-xl">What I Experience</span>
        <div className="my-2 text-xl">
          <p>Angular.js 의 코드를 React.js로 마이그레이션</p>
          <p>Migrate Codes from Angular.js to React.js</p>
          <p>Nov.2022 ~ Dec.2022</p>
        </div>
        <div className="my-2 text-xl">
          <p>기존 선박 항해 관리 프로그램 리뉴얼</p>
          <p>Renew Fleet Management Solution</p>
          <p>Jan.2023 ~ May.2023</p>
        </div>
      </div>
    </div>
  );
};

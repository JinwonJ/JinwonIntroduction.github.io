import React from "react";
import "./Introduction.scss";

const Introduction = () => {
  return (
    <div id="Introduction">
      <div className="section section1">
        <div className="content">
          <h2>자기소개</h2>
          <ul>
            <li>이러한 저러한 목표</li>
            <li>이러한 이러한 작업을 좋아함</li>
            <li>이러한 이러한것을 포용할줄 앎</li>
            <li>적은 기간의 백엔드 경력이지만 관련 업무 이해도가 어느정도 있어 작업이 원활</li>
          </ul>
        </div>
      </div>

      <div className="section section2">
        <div className="content">
          <h2>경력</h2>
          <ul>
            <li>백엔드(2020.12 ~ 2022.06) Python을 이용한 회원 관리 위주의 작업</li>
            <li>프론트엔드(2022.06 ~ 2024.07) React기반의 각종 페이지 제작</li>
          </ul>
        </div>
      </div>

      <div className="section section3">
        <div className="content">
          <h2>작업물</h2>
          <ul>
            <li>이러한 이러한것을 포용할줄 앎</li>
            <li>이러한 이러한것을 포용할줄 앎</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

import React, { useEffect } from "react";
import "./Introduction.scss";

const Introduction = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="Introduction">
      <div className="section section1">
        <div className="content">
          <h2>About me</h2>
          <li>풀스택을 꿈꾸는 개발자</li>
          <li>내가 몸담는 회사의 색이 있는걸 좋아하는 개발자</li>
          <li>개발 관련 요청을 잘받는 개발자</li>
          <li>적지만 백앤드도 해본 개발자</li>
        </div>
      </div>

      <div className="section section2">
        <div className="content">
          <h2>Work Experience</h2>
          <ul>
            <li>백엔드(2020.12 ~ 2022.06) Python을 이용한 회원 관리 위주의 작업</li>
            <li>프론트엔드(2022.06 ~ 2024.07) React기반의 각종 페이지 제작</li>
          </ul>
        </div>
      </div>

      <div className="section section3">
        <div className="content">
          <h2>Work Product</h2>
          <ul>
            <li>서비스의 지도 기반 페이지 개발</li>
            <li>각종 프로모션 페이지 제작</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

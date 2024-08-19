import React from "react";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <div id="MainPage">
      <video
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // 비디오의 종횡비를 유지하면서 화면에 가득 채웁니다.
        }}
        className="MainPageVideo"
        autoPlay
        loop
        muted
      >
        <source src="./video/MainPageMp4.mp4" type="video/mp4" />
      </video>
      <div className="MainPageComment">Introducing Jinwon</div>
    </div>
  );
};

export default MainPage;

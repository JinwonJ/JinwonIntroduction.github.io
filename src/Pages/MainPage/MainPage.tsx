import React from "react";
import "./MainPage.scss";
import { useNavigate } from "react-router-dom";
const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div id="MainPage">
      <video
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover", // 비디오의 종횡비를 유지하면서 화면에 가득 채웁니다.
        }}
        className="MainPageVideo"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="./video/MainPageMp4.mp4" type="video/mp4" />
      </video>
      <div className="MainPageCommentWrap">
        <div className="MainPageComment">Introducing Jinwon Jeong</div>
        <div className="MainPageSubComment">Sales description for the person above</div>
        <div className="MainPageMoreButtonWrap">
          <button
            className="MainPageMoreButton"
            onClick={() => {
              navigate("/introduction");
            }}
          >
            More
            <img className="DowonImage" src="./images/Down.png" alt="DowonImage" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

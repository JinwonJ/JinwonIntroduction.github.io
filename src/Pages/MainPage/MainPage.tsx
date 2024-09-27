import React, { useState } from "react";
import "./MainPage.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTranslation } from "../../App/Redux/LanguageType/TranslateSlice.tsx";

const MainPage = () => {
  const navigate = useNavigate();
  const MainPageComment = useSelector((state) => selectTranslation(state, "MainPageComment"));
  const MainPageSubComment = useSelector((state) => selectTranslation(state, "MainPageSubComment"));
  const More = useSelector((state) => selectTranslation(state, "More"));

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // 비디오 로드 완료시 호출되는 함수
  const handleVideoLoaded = () => {
    setIsVideoLoaded(true); // 비디오 로드가 완료되면 true로 변경
  };

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
        onCanPlayThrough={handleVideoLoaded} // 비디오 로드 완료 핸들러 추가
      >
        <source src="./video/MainPageMp4.mp4" type="video/mp4" />
      </video>

      {/* 비디오가 로드된 후에만 내용을 렌더링 */}
      {isVideoLoaded && (
        <div className="MainPageCommentWrap">
          <div className="MainPageComment" dangerouslySetInnerHTML={{ __html: MainPageComment }}></div>

          <div className="MainPageSubComment">{MainPageSubComment}</div>
          <div className="MainPageMoreButtonWrap">
            <button
              className="MainPageMoreButton"
              onClick={() => {
                navigate("/introduction");
              }}
            >
              {More}
              <img className="DowonImage" src="./images/Down.png" alt="DowonImage" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;

import { createSlice } from "@reduxjs/toolkit";
import { PC, Mobile } from "../../../MediaQuery/MediaQuery";
// 언어별 번역 데이터
const translations = {
  en: {
    title: "Jinwon Playground",
    MainPageComment: "Introducing Jinwon Jeong",
    MainPageSubComment: "Sales description for the person above",
    More: "More",
    sections: [
      {
        sectionTitle: "About me",
        sectionInformation: [
          "Developer who dreams of full stack",
          "Developers accommodating development-related requests",
          "Developer with backend experience",
        ],
      },
      {
        sectionTitle: "Work Experience",
        sectionInformation: [
          "Backend (2020.12 ~ 2022.06) Work focused on member management using Python",
          "Front-end (2022.06 ~ 2024.07) React-based various page production",
        ],
      },
      {
        sectionTitle: "Work Experience",
        sectionInformation: ["Development of map-based pages for the service", "Creation of various promotional pages"],
      },
    ],
  },
  ko: {
    title: "진원의 놀이터",
    MainPageComment: {
      PC: "정진원의 자기소개서", // PC용 텍스트
      Mobile: "정진원의 <br />자기소개서", // Mobile용 텍스트
    },
    MainPageSubComment: "저라는 사람을 팔아보겠습니다",
    More: "더보기",
    sections: [
      {
        sectionTitle: "저에 대해서",
        sectionInformation: ["풀스택을 꿈꾸는 개발자", "개발 관련 요청을 수용하는 개발자", "백엔드 경험이 있는 개발자"],
      },
      {
        sectionTitle: "경력 사항",
        sectionInformation: [
          "백엔드 (2020.12 ~ 2022.06) Python을 이용한 회원 관리 작업",
          "프론트엔드 (2022.06 ~ 2024.07) React를 기반으로 다양한 페이지 제작",
        ],
      },
      {
        sectionTitle: "경험 서비스",
        sectionInformation: ["서비스용 지도 기반 페이지 개발", "다양한 홍보 페이지 제작"],
      },
    ],
  },
};

const initialState = {
  language: "en",
  translations,
};

const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = translateSlice.actions;

// selectTranslation 함수 수정
export const selectTranslation = (state: any, key: any) => {
  const translation = state.translate.translations[state.translate.language][key];

  if (key === "MainPageComment" && typeof translation === "object") {
    const isPC = window.innerWidth >= 1024; // 1024px 이상이면 PC
    return isPC ? translation.PC : translation.Mobile;
  }

  return translation; // 일반적인 문자열 처리
};

export default translateSlice.reducer;

import React, { useEffect, useRef } from "react";
import "./Introduction.scss";
import { selectTranslation } from "../../App/Redux/LanguageType/TranslateSlice.tsx";
import { useSelector } from "react-redux";

const Section = ({ sectionTitle, sectionInformation }) => (
  <div className="Content">
    <h2 className="ContentTitle">{sectionTitle}</h2>
    <ul>
      {sectionInformation.map((info, index) => (
        <li key={index}>{info}</li>
      ))}
    </ul>
  </div>
);

const Introduction = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Redux에서 sections 배열 전체를 가져옴
  const sections = useSelector((state) => selectTranslation(state, "sections"));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelector(".Content")?.classList.add("visible");
          } else {
            entry.target.querySelector(".Content")?.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 },
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div id="Introduction">
      {sections.map((section, index) => (
        <div
          className={`Section Section${index + 1}`}
          style={{}}
          ref={(el) => (sectionsRef.current[index] = el)}
          key={index}
        >
          <Section sectionTitle={section.sectionTitle} sectionInformation={section.sectionInformation} />
        </div>
      ))}
    </div>
  );
};

export default Introduction;

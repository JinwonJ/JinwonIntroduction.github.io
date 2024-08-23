// import React, { useEffect } from "react";
// import "./Introduction.scss";

// const Introduction = () => {
//   useEffect(() => {
//     if ("scrollRestoration" in window.history) {
//       window.history.scrollRestoration = "manual";
//     }
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div id="Introduction">
//       <div className="Section Section1">
//         <div className="Content">
//           <h2 className="ContentTitle">About me</h2>
//           <li>Developer who dreams of full stack</li>
//           <li>Developers accommodating development-related requests</li>
//           <li>Developer with backend experience</li>
//         </div>
//       </div>

//       <div className="Section Section2">
//         <div className="Content">
//           <h2 className="ContentTitle">Work Experience</h2>
//           <li>Backend (2020.12 ~ 2022.06) Work focused on member management using Python</li>
//           <li>Front-end (2022.06 ~ 2024.07) React-based various page production</li>
//         </div>
//       </div>

//       <div className="Section Section3">
//         <div className="Content">
//           <h2 className="ContentTitle">Work Product</h2>
//           <li>Development of map-based pages for the service</li>
//           <li>Creation of various promotional pages</li>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Introduction;
import React, { useEffect, useRef } from "react";
import "./Introduction.scss";

const Introduction = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

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
      {
        threshold: 0.5,
      },
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
      <div className="Section Section1" ref={(el) => (sectionsRef.current[0] = el)}>
        <div className="Content">
          <h2 className="ContentTitle">About me</h2>
          <li>Developer who dreams of full stack</li>
          <li>Developers accommodating development-related requests</li>
          <li>Developer with backend experience</li>
        </div>
      </div>

      <div className="Section Section2" ref={(el) => (sectionsRef.current[1] = el)}>
        <div className="Content">
          <h2 className="ContentTitle">Work Experience</h2>
          <li>Backend (2020.12 ~ 2022.06) Work focused on member management using Python</li>
          <li>Front-end (2022.06 ~ 2024.07) React-based various page production</li>
        </div>
      </div>

      <div className="Section Section3" ref={(el) => (sectionsRef.current[2] = el)}>
        <div className="Content">
          <h2 className="ContentTitle">Work Product</h2>
          <li>Development of map-based pages for the service</li>
          <li>Creation of various promotional pages</li>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

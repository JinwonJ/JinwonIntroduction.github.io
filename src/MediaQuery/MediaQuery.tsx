import React, { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

interface ResponsiveProps {
  children: ReactNode;
}

const Mobile: React.FC<ResponsiveProps> = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return <>{isMobile && children}</>;
};

const PC: React.FC<ResponsiveProps> = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  return <>{isPc && children}</>;
};

export { Mobile, PC };

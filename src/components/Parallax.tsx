import { useRef } from "react";
const Parallax = ({ children }: any) => {
  const parallaxRef = useRef;

  return <div ref={parallaxRef}>{children}</div>;
};

export default Parallax;

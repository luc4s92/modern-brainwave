import { heroIcons } from "@/constants/imgs";
import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";

const ScrollP = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={parallaxRef}>
      <ScrollParallax isAbsolutelyPositioned>
        <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
          {heroIcons.map((icon, index) => (
            <li className="p-5" key={index}>
              <img src={icon.src} width={24} height={25} />
            </li>
          ))}
        </ul>
      </ScrollParallax>
    </div>
  );
};

export default ScrollP;

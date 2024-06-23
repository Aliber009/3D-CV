import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";
import "./tech.css"
// Technologies
export const Tech = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-row flex-wrap justify-center gap-10" style={{position:"relative"}}>
        {/* Iterate over each technology */}
        {TECHNOLOGIES.map((technology) => (
          <div className="w-28 h-28" key={technology.name} style={{perspective: "1000px"}}>
          <div className="floating-image" style={{ animationDelay: `${Math.random() * 2}s` }}>
             <img src={technology.icon}></img>
          </div>
          </div>
        ))}
        
      </div>
    </SectionWrapper>
  );
};

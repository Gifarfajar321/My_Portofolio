import HeroBtn from "../../elements/heroSection/HeroBtn";
import HeroDescription from "../../elements/heroSection/HeroDescription";
import HeroSosmed from "./HeroSosmed";

const HeroBody = () => {
  return (
    <>
      <div className="w-full mx-auto mt-5 z-10 lg:w-1/2 lg:pt-10 lg:pl-32 lg:mx-0 xl:pt-5 xl:pl-44">
        <HeroDescription>
          <span className="font-bold text-base text-accent lg:text-lg">Junior Front-End Developer</span> with a keen interest in
          developing clean and responsive web interfaces.
        </HeroDescription>
        <HeroBtn />
      </div>
    </>
  );
};

export default HeroBody;
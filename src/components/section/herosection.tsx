import Image from "next/image";
import image360 from "../../../public/assets/images/360.png";
import starblack from "../../../public/assets/images/star-black.png";
import starmagenta from "../../../public/assets/images/star-magenta.png";

const HeroSection = () => {
  return (
    <>
      <section
        className="min-h-screen max-h-screen lg:min-h-[1300px] h-full w-full z-0"
        id="hero"
      >
        <div className="relative w-full h-full min-h-[1300px] overflow-hidden flex flex-col lg:justify-center">
          <div className="absolute scale-50 md:scale-75 lg:scale-100 w-full max-w-[1170px] min-w-[1170px] h-full aspect-square max-h-[1170px] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:top-[10%] lg:left-[calc(((100vw-1170px)/2)+370px)] top-[-12%]">
            <div className="relative border border-[#eea8bb] w-full h-full rounded-full">
              <div className="absolute w-[70%] h-[70%] border border-[#eea8bb] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-[40%] h-[40%] border border-[#eea8bb] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>

              <Image
                src={image360}
                alt=""
                className="left-1/4 top-[35%] -translate-x-1/2 -translate-y-1/2 absolute animate-infinitebounce delay-[1500ms]"
              />
              <div className="text-4xl leading-none -translate-x-1/2 -translate-y-1/2 left-[53%] absolute top-[68%] font-bold">
                Service that make us different
              </div>
              <Image
                src={image360}
                alt=""
                width={200}
                className="left-[7%] top-[7%] -translate-x-1/2 -translate-y-1/2 absolute animate-[infinitebounce_5s_infinite] delay-[1000ms] blur-sm"
              />
              <Image
                src={image360}
                alt=""
                width={100}
                className="left-[18%] bottom-[27%] -translate-x-1/2 -translate-y-1/2 absolute animate-[infinitebounce_5s_infinite] delay-[1000ms] blur-[6px]"
              />
              <Image
                src={starmagenta}
                alt=""
                className="absolute top-[35%] right-[30%] animate-[zoomInOut_3.5s_infinite] delay-1000"
              />
              <Image
                src={starblack}
                alt=""
                className="absolute bottom-[25%] left-[20%] animate-[zoomInOut_3.5s_infinite] delay-1000 w-8 h-8"
              />
            </div>
          </div>
          <div className="w-full max-w-7xl mx-auto flex flex-col z-10 mt-36 lg:mt-0 px-4 lg:px-0">
            <div className="text-3xl md:text-6xl lg:w-1/2 font-bold">
              DIFFERENT ARTWORK AND EVENTS, THINK MAGENTA
            </div>
            <div className="w-40 h-1 rounded-full bg-[#eea8bb] mt-6"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

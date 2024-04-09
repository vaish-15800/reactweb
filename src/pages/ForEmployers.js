import Image1 from "../components/Image1";
import Logo from "../components/Logo";
import Splitter from "../components/Splitter";
import ScrollBar from "../components/ScrollBar";
import DataAggregator from "../components/DataAggregator";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import PathSegmentSeries from "../components/PathSegmentSeries";

const ForEmployers = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[1360px] box-border tracking-[normal] text-center text-lg text-primary-100 font-poppins">
      <section className="self-stretch flex flex-col items-end justify-start max-w-full">
        <Image1 />
        <Logo />
      </section>
      <Splitter />
      <ScrollBar />
      <DataAggregator />
      <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-14">
        <div className="w-[180px] rounded-3xs bg-white shadow-[0px_8px_40px_rgba(0,_0,_0,_0.22)] box-border flex flex-row items-start justify-start py-4 px-7 gap-[16px] border-[2px] border-solid border-primary-100">
          <div className="w-[120px] relative flex items-end justify-center min-w-[120px]">
            Book a Demo
          </div>
          <div className="h-3.5 w-px overflow-hidden shrink-0 hidden flex-row items-center justify-center">
            <img
              className="h-0 w-[18px] relative z-[1]"
              alt=""
              src="/vector.svg"
            />
            <img
              className="h-3.5 w-[7px] relative z-[2] ml-[-5px]"
              alt=""
              src="/vector-1.svg"
            />
          </div>
        </div>
      </div>
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <PathSegmentSeries />
      <section className="self-stretch flex flex-row items-start justify-center py-0 pr-[35px] pl-5 box-border max-w-full text-left text-23xl text-primary-100 font-garnett-semibold">
        <div className="w-[1175px] flex flex-col items-start justify-start gap-[60px] max-w-full mq1400:gap-[30px_60px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
            <h1 className="m-0 self-stretch h-[118px] relative text-inherit font-normal font-inherit flex items-center mq825:text-15xl mq450:text-6xl">
              Optimize Your Hiring Strategy with Rework's Exclusive Hiring Audit
            </h1>
            <div className="self-stretch relative text-lg font-poppins text-gray-400">
              Discover the strengths and opportunities in your current hiring
              process. Our comprehensive Hiring Audit evaluates your strategy,
              identifies areas for improvement, and tailors a roadmap for
              success. Elevate your recruitment game with data-driven insights –
              because the right talent deserves the right approach.
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[21px] px-14 bg-primary-100 rounded-xl shadow-[0px_8px_18px_rgba(174,_93,_255,_0.46)] flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full hover:bg-darkorchid mq825:pl-7 mq825:pr-7 mq825:box-border">
            <div className="relative text-5xl leading-[28px] font-medium font-poppins text-snow text-left">
              Request Your Free Hiring Audit
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ForEmployers;

const Component1 = ({ reworkHasBeenAGreatWayToM, ellipse1 }) => {
  return (
    <div className="self-stretch rounded-2xl bg-primary-300 shadow-[0px_4px_24px_rgba(0,_0,_0,_0.15)] overflow-hidden flex flex-col items-start justify-start p-5 gap-[30px] text-left text-lg text-black1 font-poppins">
      <div className="self-stretch relative leading-[27px]">
        {reworkHasBeenAGreatWayToM}
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[19px] text-5xl text-primary-100 font-garnett-regular mq450:flex-wrap">
        <img
          className="h-[50px] w-[50px] relative rounded-[50%] object-cover"
          alt=""
          src={ellipse1}
        />
        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[79px] pl-0 box-border min-w-[178px] mq450:pr-5 mq450:box-border">
          <div className="self-stretch relative leading-[32px] mq450:text-lgi mq450:leading-[26px]">
            Ronald Richards
          </div>
          <div className="relative text-base leading-[20px] font-medium font-poppins text-neutrals-300">
            HR Manager, Google
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component1;

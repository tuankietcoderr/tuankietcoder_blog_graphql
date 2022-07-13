import React from "react";

const Loading = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-100 text-black flex items-center flex-col justify-center fixed top-0 bottom-0 right-0 left-0 z-[10000]">
        <img
          src="https://opendoodles.s3-us-west-1.amazonaws.com/sprinting.svg"
          alt="loading"
          className="w-[300px] h-[300px] object-contain animate-pulse"
        />
        Đang tải vui lòng đợi...
      </div>
    </>
  );
};

export default Loading;

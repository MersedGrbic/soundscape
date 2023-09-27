import React from "react";
import placeholder from "../../assets/Rectangle.png";
const MusicCard = () => {
  return (
    <article className="group bg-secondary-bg w-[150px] h-[200px] rounded flex flex-col p-2 relative cursor-pointer">
      <div className="h-[60%]">
        <img src={placeholder} className="w-full h-[100%] rounded" />
      </div>
      <div className="h-[40%] flex flex-col justify-end">
        <p>Justin Bieber</p>
        <p className="text-text-grey text-sm">Hold on</p>
      </div>
      <h1 className="absolute border-2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block">
        Play
      </h1>
    </article>
  );
};

export { MusicCard };

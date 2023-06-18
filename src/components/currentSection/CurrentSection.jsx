import React from "react";
import CurrentLeft from "./currentLeft/CurrentLeft";
import CurrentRight from "./currentRight/CurrentRight";

const CurrentSection = () => {
  return (
    <section className="p-5 max-sm:p-3">
      <div className="container">
        <div className="flex gap-5 max-md:flex-col">
          <CurrentLeft />
          <CurrentRight />
        </div>
      </div>
    </section>
  );
};

export default CurrentSection;

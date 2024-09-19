import React from "react";

function Title({ title, Icon }) {
  return (
    <div className="w-full flex max-sm:gap-8 gap-4 items-center">
      <Icon className="sm:w-6 sm:h-6 w-4 h-4 text-subMain" />
      <h2 className="sm:text-xl font-bold text-lg">{title}</h2>
    </div>
  );
}

export default Title;

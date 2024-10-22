import React from "react";
import { HeaderContent } from "./HeaderContent";
import SearchInput from "./SearchInput";
import { InfoBoxes } from "./InfoBoxes";
import { CodeIcons } from "./CodeIcons";

const BottomHeader = () => {
  return (
    <>
        <CodeIcons />
      <div className="w-full flex justify-center items-center ">
        <div className="md:w-[765px] w-[100%] mt-[161px]  flex items-center flex-col">
          {/* ContentBottom */}
          <HeaderContent />
          {/* SearchInput */}

          <SearchInput />
          {/* Boxes */}
          <div className="flex md:w-[724px] sm:flex-row flex-col  mt-[56px] gap-[32px] justify-center">
            <InfoBoxes />
          </div>
        </div>
      </div>
    </>
  );
};

export { BottomHeader };

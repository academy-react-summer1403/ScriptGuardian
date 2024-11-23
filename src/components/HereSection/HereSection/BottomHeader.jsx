import React, { useState } from "react";
import { HeaderContent } from "./HeaderContent";
import SearchInput from "./SearchInput";
import { InfoBoxes } from "./InfoBoxes";
import { CodeIcons } from "./CodeIcons";
import { useCourses } from "../../../core/services/api/CoursesPage/GetAllCourses";
import { NavLink } from "react-router-dom";

const BottomHeader = () => {
  //API

  const [searchQuery, setSearchQuery] = useState("");

  const { data } = useCourses({
    SearchQuery: searchQuery,
  });
  console.log(data , "this best data for ever")

  // const handleSearchChange = (event) => {
  //   setSearchQuery(event.target.value) // به‌روزرسانی searchQuery با مقدار ورودی
  // };
  return (
    <>
      <CodeIcons />
      <div className="w-full flex justify-center items-center ">
        <div className="md:w-[765px] w-[100%] mt-[161px]  flex items-center flex-col relative">
          {/* ContentBottom */}
          <HeaderContent />
          {/* SearchInput */}

          <SearchInput
            handleSearchChange={(event)=>setSearchQuery(event.target.value) }
            searchQuery={searchQuery}
          />
          {searchQuery && (
            <>
              <div className="w-[724px] absolute min-h-[100px] bg-white flex flex-col top-[310px] rounded-2xl p-3 ">
                {data &&
                  data?.courseFilterDtos.map((item) => {
                    return (
                      <>
                        <div className="border-b justify-between  flex items-center ">
                          <p>{item?.title}</p>
                          <NavLink
                            to={`Courses/${item?.courseId}`}
                            className="text-xs text-[#2196F3] dark:text-[#2b6ea6]"
                          >
                            دیدن دوره
                          </NavLink>
                        </div>
                      </>
                    );
                  })}
              </div>
            </>
          )}
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

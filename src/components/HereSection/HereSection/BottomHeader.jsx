import React, { useEffect, useState } from "react";
import { HeaderContent } from "./HeaderContent";
import SearchInput from "./SearchInput";
import { InfoBoxes } from "./InfoBoxes";
import { CodeIcons } from "./CodeIcons";
import { useCourses } from "../../../core/services/api/CoursesPage/GetAllCourses";
import { NavLink } from "react-router-dom";
import noProfile from "../../../images/NewsDetails/default_image.png";

const BottomHeader = () => {
  //API

  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(undefined);

  const { data } = useCourses({
    SearchQuery: debouncedSearchQuery,
  });
  console.log(data, "this best data for ever");

  //Search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <>
      <CodeIcons />
      <div className="w-full flex justify-center items-center ">
        <div className="md:w-[765px] w-[100%] mt-[161px]  flex items-center flex-col relative">
          {/* ContentBottom */}
          <HeaderContent />
          {/* SearchInput */}

          <SearchInput
            handleSearchChange={(event) => setSearchQuery(event.target.value)}
            searchQuery={searchQuery}
          />
          {debouncedSearchQuery && (
            <>
              <div className=" md:w-[724px] w-[85%] absolute min-h-[100px] bg-white dark:bg-gray-900 flex flex-col top-[310px] rounded-2xl p-3 z-50 ">
                {data && data.courseFilterDtos.length > 0 ? (
                  data.courseFilterDtos.map((item) => (
                    <div
                      key={item?.courseId}
                      className="border-b dark:border-b-gray-950 py-4 px-6 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-gray-950 transition-all  group"
                    >
                      <img
                        src={
                          item?.tumbImageAddress &&
                          item?.tumbImageAddress != "Not-set"
                            ? item?.tumbImageAddress
                            : noProfile
                        }
                        alt={item?.title}
                        className="w-16 h-16 object-cover rounded-lg shadow-md"
                      />
                      <div className="flex flex-col justify-between">
                        <p className="text-lg font-semibold text-gray-800  dark:group-hover:text-white dark:text-white ">
                          {item?.title}
                        </p>
                        <NavLink
                          to={`Courses/${item?.courseId}`}
                          className="text-xs text-[#2196F3] dark:text-[#2b6ea6] mt-2 hover:underline"
                        >
                          دیدن دوره
                        </NavLink>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>دوره‌ای یافت نشد</p>
                )}
              </div>
            </>
          )}
          {/* Boxes */}
          <div className="flex md:w-[724px] flex-row   mt-[56px] sm:gap-[32px] gap-x-[16px] justify-center sm:w-auto w-full">
            <InfoBoxes />
          </div>
        </div>
      </div>
    </>
  );
};

export { BottomHeader };

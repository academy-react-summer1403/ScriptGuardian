import React, { useState, useEffect } from "react";
import { HereNewsSection } from "../../components/NewsPage/HereNewsSection";
import News from "../../images/NewsAndArticle/photo1.png";
import { NewsSearchAndFilter } from "../../components/NewsPage/NewsSearchAndFilter";
import { CardNewsPage } from "../../components/NewsPage/CardNewsPage";
import ReactPaginate from "react-paginate";
import {
  useLandingNews,
  usePageNews,
} from "../../core/services/api/Landing/LandingNews";
import { CustomSpinner } from "../../components/animation/CustomSpinner";

const NewsPage = () => {
  //handel search
  const [searchQuery, setSearchQuery] = useState(undefined);
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(undefined);

  const [sortingCol, setSortingCol] = useState(undefined);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;
  const [current, setCurrentPage] = useState(0);

  const { data: News } = usePageNews({
    SearchQuery: debouncedSearchQuery,
    RowsOfPage: itemsPerPage,
    PageNumber: current + 1,
    SortingCol: sortingCol,
  });
  const data = News?.news;
  const Total = News?.totalCount;

  //Search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(0);
  };

  //handel page

  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(Total / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected);
  };

  const loaderStyle = "flex justify-center items-center mx-auto ";

  return (
    <>
      <HereNewsSection />

      <div className="flex flex-col container xl:w-[1280px] mx-auto  ">
        <NewsSearchAndFilter
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          setSortingCol={setSortingCol}
        />

        <div className="flex  mt-[48px] w-full flex-wrap xl:gap-x-[32px] lg:gap-x-0  md:gap-x-[32px] sm:gap-y-[40px] min-h-[300px] gap-y-[30px] xl:justify-start lg:justify-around justify-center">
          {!currentItems ? (
            <CustomSpinner style={loaderStyle} />
          ) : currentItems.length === 0 ? (
            <p className="text-center text-gray-700 dark:text-gray-200 mx-auto mt-[150px]">
              داده‌ای یافت نشد
            </p>
          ) : (
            currentItems.map((item, index) => (
              <CardNewsPage
                key={index}
                id={item.id}
                title={item.title}
                miniDescribe={item.miniDescribe}
                addUserProfileImage={item.addUserProfileImage}
                currentView={item.currentView}
                currentRate={item.currentRate}
                updateDate={item?.updateDate}
              />
            ))
          )}
        </div>
        <div className="flex justify-center">
          <ReactPaginate
            breakLabel="..."
            nextLabel=<div className="w-[32px] h-[32px] bg-[#ECEFF1] dark:bg-[#37474F] rounded-full flex items-center justify-center ">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0333 13.2802L5.68667 8.93355C5.17333 8.42021 5.17333 7.58022 5.68667 7.06688L10.0333 2.72021"
                    className="stroke-[#263238] dark:stroke-[#ECEFF1]"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel=<div className="w-[32px] h-[32px] bg-[#2196F3] dark:bg-[#1565C0]  rounded-full flex items-center justify-center">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.96666 2.71978L10.3133 7.06645C10.8267 7.57978 10.8267 8.41978 10.3133 8.93312L5.96666 13.2798"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            renderOnZeroPageCount={null}
            containerClassName={"pagination"}
            activeClassName={
              "w-[32px] h-[32px] bg-[#2196F3] dark:bg-[#1565C0] rounded-full flex items-center justify-center text-white "
            }
            className="flex gap-5 mt-[48px] justify-center items-center text-[#263238] dark:text-gray-300"
          />
        </div>
      </div>
    </>
  );
};

export { NewsPage };

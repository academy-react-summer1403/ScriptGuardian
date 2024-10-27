import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const PreviewTab = ({ activeTab }) => {
  const [openSections, setOpenSections] = useState({
    chapter1: false,
    chapter2: false,
    chapter3: false,
    chapter4: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  return (
    <>
      {activeTab === "preview" && (
        <>
          <div className=" mx-auto w-[779px]  ">
            {/* فصل اول */}
            <div className="flex flex-col ">
              <div
                onClick={() => toggleSection("chapter1")}
                className={`w-full  flex justify-between items-center bg-[#2196F3] dark:bg-[#1565C0] text-white h-14 rounded-xl mb-3`}
              >
                <div className="flex items-center mr-3">
                  <span>
                    {openSections.chapter1 ? <FaMinus /> : <FaPlus />}
                  </span>
                  <p className="mr-1">
                    {" "}
                    <span className="font-bold"> فصل اول: </span> Html چیست؟{" "}
                  </p>
                </div>
                <div className="flex items-center ml-5 gap-x-2">
                  <p>56 mins</p>
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.6668 8.00016C14.6668 11.6802 11.6802 14.6668 8.00016 14.6668C4.32016 14.6668 1.3335 11.6802 1.3335 8.00016C1.3335 4.32016 4.32016 1.3335 8.00016 1.3335C11.6802 1.3335 14.6668 4.32016 14.6668 8.00016Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.4734 10.1202L8.40675 8.88684C8.04675 8.6735 7.75342 8.16017 7.75342 7.74017V5.00684"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {openSections.chapter1 && (
                <>
                  <div className="bg-[#ECEFF1] dark:bg-gray-800 h-[54px] flex justify-between rounded-xl mb-3">
                    <div className=" flex items-center mr-4">
                      <div className="w-[24px] h-[24px] rounded-full bg-[#2196F3] dark:bg-[#1565C0] flex items-center justify-center text-white">
                        1
                      </div>
                      <p className="text-[#263238] dark:text-gray-200 mr-2">
                        تگ Html
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <p className="ml-[6px] text-[#455A64] dark:text-gray-400">
                          7 mins
                        </p>
                        <span className="ml-3">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.6668 8.00016C14.6668 11.6802 11.6802 14.6668 8.00016 14.6668C4.32016 14.6668 1.3335 11.6802 1.3335 8.00016C1.3335 4.32016 4.32016 1.3335 8.00016 1.3335C11.6802 1.3335 14.6668 4.32016 14.6668 8.00016Z"
                              className="stroke-[#455A64] dark:stroke-gray-400"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.4734 10.1202L8.40675 8.88684C8.04675 8.6735 7.75342 8.16017 7.75342 7.74017V5.00684"
                              className="stroke-[#455A64] dark:stroke-gray-400"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="w-[32px] h-[32px]  bg-[#2196F3] dark:bg-[#1565C0] rounded-xl flex justify-center items-center ml-4">
                        <span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.7666 9.7334L9.89994 11.8667L12.0333 9.7334"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.8999 3.3335V11.8085"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16.6668 10.1499C16.6668 13.8332 14.1668 16.8166 10.0002 16.8166C5.8335 16.8166 3.3335 13.8332 3.3335 10.1499"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#ECEFF1] dark:bg-gray-800 h-[54px] flex justify-between rounded-xl mb-3">
                    <div className=" flex items-center mr-4">
                      <div className="w-[24px] h-[24px] rounded-full bg-[#2196F3] dark:bg-[#1565C0] flex items-center justify-center text-white">
                        1
                      </div>
                      <p className="text-[#263238] dark:text-gray-200 mr-2">
                        تگ Html
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <p className="ml-[6px] text-[#455A64] dark:text-gray-400">
                          7 mins
                        </p>
                        <span className="ml-3">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.6668 8.00016C14.6668 11.6802 11.6802 14.6668 8.00016 14.6668C4.32016 14.6668 1.3335 11.6802 1.3335 8.00016C1.3335 4.32016 4.32016 1.3335 8.00016 1.3335C11.6802 1.3335 14.6668 4.32016 14.6668 8.00016Z"
                              className="stroke-[#455A64] dark:stroke-gray-400"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.4734 10.1202L8.40675 8.88684C8.04675 8.6735 7.75342 8.16017 7.75342 7.74017V5.00684"
                              className="stroke-[#455A64] dark:stroke-gray-400"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="w-[32px] h-[32px]  bg-[#2196F3] dark:bg-[#1565C0] rounded-xl flex justify-center items-center ml-4">
                        <span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.7666 9.7334L9.89994 11.8667L12.0333 9.7334"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.8999 3.3335V11.8085"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16.6668 10.1499C16.6668 13.8332 14.1668 16.8166 10.0002 16.8166C5.8335 16.8166 3.3335 13.8332 3.3335 10.1499"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Chapter2 */}

            <div className="flex flex-col mb-3 ">
              <div
                onClick={() => toggleSection("chapter2")}
                className={`w-full  flex justify-between items-center  bg-[#2196F3] dark:bg-[#1565C0] text-white h-14 rounded-xl mb-3`}
              >
                <div className="flex items-center mr-3">
                  <span>
                    {openSections.chapter1 ? <FaMinus /> : <FaPlus />}
                  </span>
                  <p className="mr-1">
                    {" "}
                    <span className="font-bold"> فصل اول: </span> Html چیست؟{" "}
                  </p>
                </div>
                <div className="flex items-center ml-5 gap-x-2">
                  <p>56 mins</p>
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.6668 8.00016C14.6668 11.6802 11.6802 14.6668 8.00016 14.6668C4.32016 14.6668 1.3335 11.6802 1.3335 8.00016C1.3335 4.32016 4.32016 1.3335 8.00016 1.3335C11.6802 1.3335 14.6668 4.32016 14.6668 8.00016Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.4734 10.1202L8.40675 8.88684C8.04675 8.6735 7.75342 8.16017 7.75342 7.74017V5.00684"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {openSections.chapter2 && (
                <>
                  <div className="bg-[#ECEFF1] dark:bg-gray-800 h-[54px] flex justify-between rounded-xl mb-3">
                    <div className=" flex items-center mr-4">
                      <div className="w-[24px] h-[24px] rounded-full bg-[#2196F3] dark:bg-[#1565C0] flex items-center justify-center text-white">
                        1
                      </div>
                      <p className="text-[#263238] dark:text-gray-200 mr-2">
                        تگ Html
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <p className="ml-[6px] text-[#455A64] dark:text-gray-400">
                          7 mins
                        </p>
                        <span className="ml-3">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.6668 8.00016C14.6668 11.6802 11.6802 14.6668 8.00016 14.6668C4.32016 14.6668 1.3335 11.6802 1.3335 8.00016C1.3335 4.32016 4.32016 1.3335 8.00016 1.3335C11.6802 1.3335 14.6668 4.32016 14.6668 8.00016Z"
                              className="stroke-[#455A64] dark:stroke-gray-400"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.4734 10.1202L8.40675 8.88684C8.04675 8.6735 7.75342 8.16017 7.75342 7.74017V5.00684"
                              className="stroke-[#455A64] dark:stroke-gray-400"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="w-[32px] h-[32px]  bg-[#2196F3] dark:bg-[#1565C0] rounded-xl flex justify-center items-center ml-4">
                        <span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.7666 9.7334L9.89994 11.8667L12.0333 9.7334"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.8999 3.3335V11.8085"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16.6668 10.1499C16.6668 13.8332 14.1668 16.8166 10.0002 16.8166C5.8335 16.8166 3.3335 13.8332 3.3335 10.1499"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#ECEFF1] dark:bg-gray-800 h-[54px] flex justify-between rounded-xl mb-3">
                    <div className=" flex items-center mr-4">
                      <div className="w-[24px] h-[24px] rounded-full bg-[#2196F3] dark:bg-[#1565C0] flex items-center justify-center text-white">
                        1
                      </div>
                      <p className="text-[#263238] dark:text-gray-200 mr-2">
                        تگ Html
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <p className="ml-[6px] text-[#455A64] dark:text-gray-400">
                          7 mins
                        </p>
                        <span className="ml-3">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.6668 8.00016C14.6668 11.6802 11.6802 14.6668 8.00016 14.6668C4.32016 14.6668 1.3335 11.6802 1.3335 8.00016C1.3335 4.32016 4.32016 1.3335 8.00016 1.3335C11.6802 1.3335 14.6668 4.32016 14.6668 8.00016Z"
                              className="stroke-[#455A64] dark:stroke-gray-400"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.4734 10.1202L8.40675 8.88684C8.04675 8.6735 7.75342 8.16017 7.75342 7.74017V5.00684"
                              className="stroke-[#455A64] dark:stroke-gray-400"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="w-[32px] h-[32px]  bg-[#2196F3] dark:bg-[#1565C0] rounded-xl flex justify-center items-center ml-4">
                        <span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.7666 9.7334L9.89994 11.8667L12.0333 9.7334"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.8999 3.3335V11.8085"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16.6668 10.1499C16.6668 13.8332 14.1668 16.8166 10.0002 16.8166C5.8335 16.8166 3.3335 13.8332 3.3335 10.1499"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export { PreviewTab };

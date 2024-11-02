import React from "react";
import { Field, Form, Formik } from "formik";
import { MdCheck } from "react-icons/md";
import { NavLink } from "react-router-dom";
const RegisterFinish = ({ isOpen, toggleModal }) => {
  return (
    <>
      {isOpen && (
        <div className="sm:w-[420px] sm:h-[528px] w-[90%]  absolute bg-white dark:bg-gray-900 rounded-[24px] top-[73px]  left-1/2 transform -translate-x-1/2 flex flex-col">
          <div className="flex justify-between ">
            <h2 className="mt-[30px] mr-[32px] text-[#263238] dark:text-gray-200 font-[700] text-[32px] tracking-tight">
              ورود به حساب
            </h2>
            <div className="w-[48px] h-[48px] bg-[#F1F7FF] dark:bg-[#2A3B54] rounded-[16px] flex justify-center items-center mt-8 ml-[32px] ">
              <span onClick={toggleModal}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    className="stroke-[#2196F3] dark:stroke-[#1565C0]"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.16992 14.8299L14.8299 9.16992"
                    className="stroke-[#2196F3] dark:stroke-[#1565C0]"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.8299 14.8299L9.16992 9.16992"
                    className="stroke-[#2196F3] dark:stroke-[#1565C0]"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
          <Formik
            initialValues={{ emailOrNumber: "", password: "", accepted: false }}
          >
            <Form>
              <Field
                className="sm:w-[365px] w-[80%] h-[56px] border-[#CFD8DC] dark:bg-gray-900 dark:border-gray-950 dark:placeholder:text-gray-200 border rounded-[50px] pr-5 mr-[32px] mt-[48px] outline-none dark:text-gray-200 text-[#607D8B]"
                placeholder="ایمیل"
                name="emailOrNumber"
              />
              <Field
                className="sm:w-[365px] w-[80%] h-[56px] border-[#CFD8DC] border  dark:bg-gray-900 dark:border-gray-950 dark:placeholder:text-gray-200 rounded-[50px] pr-5 mr-[32px] mt-[16px] outline-none text-[#607D8B] dark:text-white"
                placeholder="رمز عبور"
                name="password"
                type="password"
              />

              <Field
                className="sm:w-[365px] w-[80%] h-[56px] border-[#CFD8DC] border  dark:bg-gray-900 dark:border-gray-950 dark:placeholder:text-gray-200 rounded-[50px] pr-5 mr-[32px] mt-[16px] outline-none text-[#607D8B] dark:text-white"
                placeholder="تکرار عبور"
                name="password"
                type="password"
              />
              <div className="flex  mt-[24px] justify-between sm:text-[14px] text-[12px]">
                <div className="flex items-center mr-[32px] gap-[8px] ">
                  <Field
                    type="checkbox"
                    name="accepted"
                    className="peer hidden"
                    id="accepted"
                  />
                  <label
                    htmlFor="accepted"
                    className="flex justify-center items-center w-[20px] h-[20px] border-[#2196F3] dark:border-[#1565C0] border rounded-lg peer-checked:bg-blue-500 dark:peer-checked:bg-[#1565C0] peer-checked:ease-in-out"
                  >
                    <MdCheck className="text-white dark:text-gray-900" />
                  </label>

                  <p className="text-[#455A64] dark:text-gray-200 ">
                    من را به خاطر بسپار
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-[48px]">
                <button
                  type="submit"
                  className="rounded-[80px] text-white w-[208px] h-[56px] bg-[#2196F3] dark:bg-[#1565C0] hover:bg-[#1976D2] dark:hover:bg-[#0D47A1] transition-colors duration-300"
                >
                  دریافت کد تایید
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      )}
    </>
  );
};

export { RegisterFinish };

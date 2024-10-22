import { Field, Form, Formik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";

const RegisterModal = ({ closeModal }) => {
  return (
    <div className="sm:w-[420px] sm:h-[380px] w-[90%]  absolute bg-white dark:bg-gray-900 rounded-[24px] top-[73px]  left-1/2 transform -translate-x-1/2 flex flex-col">
      <div className="flex justify-between ">
        <h2 className="mt-[30px] mr-[32px] text-[#263238] dark:text-gray-200 font-[700] text-[32px] tracking-tight">
          ساخت حساب کاربری
        </h2>
        <div className="w-[48px] h-[48px] bg-[#F1F7FF] dark:bg-[#2A3B54] rounded-[16px] flex justify-center items-center mt-8 ml-[32px] ">
          <span onClick={closeModal}>
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
        initialValues={{
          NumberPhone: "",
        }}
      >
        <Form>
          <Field
            className="sm:w-[365px] w-[80%] h-[56px] border-[#CFD8DC] dark:bg-gray-900 dark:border-gray-950 dark:placeholder:text-gray-200 border rounded-[50px] pr-5 mr-[32px] mt-[48px] outline-none dark:text-gray-200 text-[#607D8B]"
            placeholder="  شماره موبایل"
            name="NumberPhone"
          />

          <div className="flex justify-center mt-[48px]">
            <button
              type="submit"
              className="rounded-[80px] text-white w-[208px] h-[56px] bg-[#2196F3] dark:bg-[#1565C0] hover:bg-[#1976D2] dark:hover:bg-[#0D47A1] transition-colors duration-300"
            >
              دریافت کد تایید
            </button>
          </div>

          <div className="w-[148px] flex text-[14px] tracking-tighter justify-center mx-auto mt-5 sm:mb-0 mb-5">
            <p className="text-[#455A64] dark:text-gray-200">
              حساب کاربری دارید؟{" "}
            </p>
            <NavLink
              className={
                "underline text-[#2196F3] dark:text-[#1565C0] mr-[3px]"
              }
            >
               وارد شوید
            </NavLink>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export { RegisterModal };

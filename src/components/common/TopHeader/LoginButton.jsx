import { FaSignInAlt } from "react-icons/fa";
import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { MdCheck } from "react-icons/md";
import { NavLink } from "react-router-dom";
const LoginButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <button
        onClick={openModal}
        className="bg-[#2196F3] dark:bg-[#1565C0]  hover:bg-[#1976D2] dark:hover:bg-[#0D47A1] xl:w-[133px] lg:w-[100px] sm:w-[36px] w-[30px] xl:h-[48px] lg:h-[40px] sm:h-[36px] h-[30px]  xl:rounded-[80px] lg:rounded-[80px] rounded-[100%] text-white transition duration-300 "
      >
        <p className="lg:block hidden xl:text-[14px] lg:text-[14px]">
          ورود به حساب
        </p>
        <div className="lg:hidden w-full h-full flex items-center justify-center">
          <FaSignInAlt className="text-white sm:text-[18px] text-[16px]" />
        </div>
      </button>

      {isOpen && (
          <>
         <div className="w-[420px] h-[490px]  absolute bg-[#FFFFFF] rounded-[24px] top-[73px]  left-[450px] flex flex-col">
          <div className="flex justify-between ">
            <h2 className="mt-[30px] mr-[32px] text-[#263238] font-[700] text-[32px] tracking-tight">
              ورود به حساب
            </h2>
            <div className="w-[48px] h-[48px] bg-[#F1F7FF] rounded-[16px] flex justify-center items-center mt-8 ml-[32px]">
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
                    stroke="#2196F3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.16992 14.8299L14.8299 9.16992"
                    stroke="#2196F3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.8299 14.8299L9.16992 9.16992"
                    stroke="#2196F3"
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
                className="w-[365px] h-[56px] border-[#CFD8DC] border rounded-[50px] pr-5 mr-[32px] mt-[48px]"
                placeholder="ایمیل یا شماره موبایل"
                name="emailOrNumber"
              />
              <Field
                className="w-[365px] h-[56px] border-[#CFD8DC] border rounded-[50px] pr-5 mr-[32px] mt-[16px]"
                placeholder="رمز عبور"
                name="password"
                type="password"
              />
              <div className="flex  mt-[24px] justify-between text-[14px]">
                <div className="flex items-center mr-[32px] gap-[8px] ">
                  <Field
                    type="checkbox"
                    name="accepted"
                    className="peer hidden"
                    id="accepted"
                  />
                  <label
                    htmlFor="accepted"
                    className="flex justify-center items-center w-[20px] h-[20px] border-[#2196F3] border rounded-lg peer-checked:bg-blue-500 peer-checked:ease-in-out"
                  >
                    <MdCheck className="text-white" />
                  </label>

                  <p className="text-[#455A64]  ">من را به خاطر بسپار</p>
                </div>
                <NavLink className="text-[#2196F3] ml-[32px] underline p-">
                  رمز عبور را فراموش کردم
                </NavLink>
              </div>

              <div className="flex justify-center mt-[48px]">
                <button
                  type="submit"
                  className="rounded-[80px] text-white w-[208px] h-[56px] bg-[#2196F3]"
                >
                  دریافت کد تایید
                </button>
              </div>
              <div className="w-[148px] flex text-[14px] tracking-tighter justify-center mx-auto mt-5">
                  <p>حساب کاربری ندارید؟ </p>
                  <NavLink className={"underline text-[#2196F3] mr-[3px]"}>ثبت نام</NavLink>
              </div>
            </Form>
          </Formik>
        </div>
          </>
      )}
    </>
  );
};

export { LoginButton };

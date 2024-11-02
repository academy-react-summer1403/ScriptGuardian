import { Field, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { MdCheck } from "react-icons/md";
import { Form, NavLink } from "react-router-dom";
import * as Yup from "yup";

const LoginCodeVerification = ({ isOpen, toggleModal }) => {
  const validationSchema = Yup.object().shape({
    code1: Yup.string()
      .matches(/^[0-9]$/, "فقط عدد مجاز است")
      .required("این فیلد اجباری است"),
    code2: Yup.string()
      .matches(/^[0-9]$/, "فقط عدد مجاز است")
      .required("این فیلد اجباری است"),
    code3: Yup.string()
      .matches(/^[0-9]$/, "فقط عدد مجاز است")
      .required("این فیلد اجباری است"),
    code4: Yup.string()
      .matches(/^[0-9]$/, "فقط عدد مجاز است")
      .required("این فیلد اجباری است"),
    code5: Yup.string()
      .matches(/^[0-9]$/, "فقط عدد مجاز است")
      .required("این فیلد اجباری است"),
  });


  if(isOpen === true){
    console.log("true Code Modal")
  }
  else{
    console.log("false Code Modal")
  }
  return (
    <>
      {isOpen && (
        <>
          {" "}
          <div className="sm:w-[420px] sm:h-[483px] w-[90%]  absolute bg-white dark:bg-gray-900 rounded-[24px] top-[73px]  left-1/2 transform -translate-x-1/2 flex flex-col">
            <div className="flex justify-between ">
              <h2 className="mt-[30px] mr-[32px] text-[#263238] dark:text-gray-200 font-[700] text-[32px] tracking-tight">
                کد تاییدیه
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
            <div className="w-[356px] mt-[32px] mx-auto text-[#455A64] dark:text-gray-400">
              کد به شماره 989118045177+ ارسال شد، در صورت اشتباه بودن شماره آنرا
              <NavLink className={""}> تغییر دهید</NavLink>
            </div>
            <Formik
              initialValues={{
                code1: "",
                code2: "",
                code3: "",
                code4: "",
                code5: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                const verificationCode = Object.values(values).join("");
                console.log("Verification Code:", verificationCode);
                startCountdown(); // شروع شمارش معکوس پس از ارسال
              }}
            >
              {({ errors, touched }) => (
                <Form className="">
                  <div className="flex mt-[24px] mx-auto w-[356px] justify-between">
                    {["code1", "code2", "code3", "code4", "code5"].map(
                      (name, index) => (
                        <div key={index} className="">
                          <Field
                            name={name}
                            type="text"
                            maxLength="1"
                            className="w-[62px] h-[62px] text-center border border-gray-300 rounded-3xl   block"
                          />
                          {errors[name] && touched[name] ? (
                            <div className="text-red-500 text-xs absolute ">
                              {errors[name]}
                            </div>
                          ) : null}
                        </div>
                      )
                    )}
                  </div>

                  <div className="flex justify-center mt-[48px]">
                    <button
                      type="submit"
                      className="rounded-[80px] text-white w-[197px] h-[56px] bg-[#2196F3] dark:bg-[#1565C0] hover:bg-[#1976D2] dark:hover:bg-[#0D47A1] transition-colors duration-300"
                    >
                      ورود به حساب
                    </button>
                  </div>
                  <div className="w-[148px] flex text-[14px] tracking-tighter justify-center mx-auto mt-5 sm:mb-0 mb-5">
                    <p className="text-[#455A64] dark:text-gray-200">
                      کد ارسال نشد؟{" "}
                    </p>
                    <NavLink
                      className={
                        "underline text-[#2196F3] dark:text-[#1565C0] mr-[3px]"
                      }
                    >
                      ارسال دوباره
                    </NavLink>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </>
      )}
    </>
  );
};

export { LoginCodeVerification };

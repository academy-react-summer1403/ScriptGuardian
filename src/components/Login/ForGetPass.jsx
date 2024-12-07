import React from "react";
import {
  useForgetPassStepOne,
  useRegisterCode,
} from "../../core/services/api/Auth/Register/Register";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { validationForgetPass, validationRegisterCode } from "../../core/services/validation/validationSchema/Auth";
import { toast } from "react-toastify";
import { CustomSpinner } from "../animation/CustomSpinner";

const ForGetPass = ({
  toggleForGetPassModal,
  setIsForgetPass,
  menuRef,
  openLogin,
}) => {
  const {
    mutate: ForGetPass,
    isError,
    data,
    isPending,
  } = useForgetPassStepOne();
  //   console.log("thisloction", window.location.href);
  const formik = useFormik({
    initialValues: {
      email: "",
      baseUrl: "http://localhost:5173",
    },
    validationSchema: validationForgetPass,
    onSubmit: (values) => {
      ForGetPass(values, {
        onSuccess: (data) => {
          if (data.success === true) {
            setIsForgetPass(false);
            toast.success(
              "عملیات با موفقیت انجام شد لطفا جیمیل خود را چک کنید"
            );
          } else {
            toast.error("خطا در بازیابی");
          }
        },
        // onError: (error) => {

        // },
      });
    },
  });
  return (
    <div
      ref={menuRef}
      className="sm:w-[420px] sm:h-[380px] w-[90%]  absolute bg-white dark:bg-gray-900 rounded-[24px] top-[73px]  left-1/2 transform -translate-x-1/2 flex flex-col"
    >
      <div className="flex justify-between ">
        <h2 className="mt-[30px] mr-[32px] text-[#263238] dark:text-gray-200 font-[700] text-[32px] tracking-tight">
          فراموشی رمز{" "}
        </h2>
        <div className="w-[48px] h-[48px] bg-[#F1F7FF] dark:bg-[#2A3B54] rounded-[16px] flex justify-center items-center mt-8 ml-[32px] cursor-pointer ">
          <span onClick={toggleForGetPassModal} className="">
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

      <form onSubmit={formik.handleSubmit}>
        <input
          className="sm:w-[365px] w-[80%] h-[56px] border-[#CFD8DC] dark:bg-gray-900 dark:border-gray-950 dark:placeholder:text-gray-200 border rounded-[50px] pr-5 mr-[32px] mt-[48px] outline-none dark:text-gray-200 text-[#607D8B]"
          placeholder="جیمیل خود را وارد کنید"
          name="NumberPhone"
          {...formik.getFieldProps("email")}
        />
        {formik.errors.email && (
          <div className="dark:text-red-800 text-red-600 absolute top-[190px] right-11">
            {formik.errors.email}
          </div>
        )}

        <div className="flex justify-center mt-[48px]">
          {isPending ? (
            <button
              onClick={() => {
                // toggleModal();
                // openVerification();
              }}
              type="submit"
              className="rounded-[80px] text-white w-[208px] h-[56px] bg-[#2196F3] dark:bg-[#1565C0] hover:bg-[#1976D2] dark:hover:bg-[#0D47A1] transition-colors duration-300"
            >
              <CustomSpinner color={"#FFF"} style={""} size={"30"} />
            </button>
          ) : (
            <button
              onClick={() => {
                // toggleModal();
                // openVerification();
              }}
              type="submit"
              className="rounded-[80px] text-white w-[208px] h-[56px] bg-[#2196F3] dark:bg-[#1565C0] hover:bg-[#1976D2] dark:hover:bg-[#0D47A1] transition-colors duration-300"
            >
              دریافت پیام ویرایش رمز{" "}
            </button>
          )}
        </div>

        <div className="w-[148px] flex text-[14px] tracking-tighter justify-center mx-auto mt-5 sm:mb-0 mb-5">
          <p className="text-[#455A64] dark:text-gray-200">
            حساب کاربری دارید؟{" "}
          </p>
          <p
            onClick={() => {
              toggleForGetPassModal();
              openLogin();
            }}
            className={
              "underline text-[#2196F3] dark:text-[#1565C0] cursor-pointer mr-[3px]"
            }
          >
            وارد شوید
          </p>
        </div>

        {/* <div className="w-[148px] flex text-[14px] tracking-tighter justify-center mx-auto mt-5 sm:mb-0 mb-5">
          <p className="text-[#455A64] dark:text-gray-200">
            حساب کاربری دارید؟{" "}
          </p>
          <p
            onClick={() => {
              //   toggleModal();
              //   openLogin();
            }}
            className={
              "underline text-[#2196F3] dark:text-[#1565C0] cursor-pointer mr-[3px]"
            }
          >
            وارد شوید
          </p>
        </div> */}
      </form>
    </div>
  );
};

export { ForGetPass };

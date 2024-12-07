import { useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { usePayMentStepOne } from "../../../core/services/api/Panel/handelBuy";
import { useQueryClient } from "@tanstack/react-query";
import { CustomSpinner } from "../../animation/CustomSpinner";

import DatePicker from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";
import {
  convertIsoToJalali,
  convertJalaliToIso,
} from "../../../core/utils/dateUtils";

const BuyModal = ({
  menuRef,
  Click,
  setIsOpen,
  setImageStepTwo,
  courseId,
  setPaymentId,
}) => {
  const queryClient = useQueryClient();

  const { data, mutate: StepOne, isPending } = usePayMentStepOne();
  const formik = useFormik({
    initialValues: {
      CourseId: courseId,
      PeymentDate: "",
      Paid: "",
      PaymentInvoiceNumber: "",
    },
    enableReinitialize: true,
    onSubmit: (data) => {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }

      StepOne(formData, {
        onSuccess: (data) => {
          if (data.success === true) {
            setImageStepTwo(true);
            setIsOpen(false);
            toast.success(data.message);
            setPaymentId(data.id);
            queryClient.invalidateQueries("MyCourses");
          } else {
            // toast.error(data.ErrorMessage?.[0]);
            // toast.error(data.ErrorMessage);
            console.log(!!data, "this log of data");
          }
        },
      });
    },
  });

  //calender
  const [calendar, setCalendar] = useState(false);
  const CalenderRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (CalenderRef.current && !CalenderRef.current.contains(event.target)) {
        setCalendar(false);
      }
    };

    if (calendar) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [calendar]);

  console.log(formik.values.PeymentDate, "formik.values.PeymentDate");

  const handelChangeData = (dateOfDatePiker) => {
    const convert = `${
      dateOfDatePiker
        ? dateOfDatePiker.convert(persian, persian_en).format()
        : ""
    }`;

    const Iso = convertJalaliToIso(convert);

    formik.setFieldValue("PeymentDate", Iso);
    setCalendar(false);
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-40 flex justify-center items-center">
        {/* Modal content */}

        <div
          ref={menuRef}
          className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 w-96"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              فرم پرداخت
            </h2>
            <button
              onClick={Click}
              className="text-gray-500 dark:text-gray-200 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <div className="w-full">
              <label
                htmlFor="Paid"
                className="block  text-base  mb-2   text-[#455A64] dark:text-white"
              >
                مبلغ مورد نظر
              </label>
              <input
                type="text"
                id="Paid"
                name="Paid"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="مبلغ را وارد کنید"
                {...formik?.getFieldProps("Paid")}
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="PaymentInvoiceNumber"
                className="block  text-base  mb-2   text-[#455A64] dark:text-white"
              >
                شناسه پرداخت{" "}
              </label>
              <input
                type="text"
                id="PaymentInvoiceNumber"
                name="PaymentInvoiceNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="شناسه پرداخت را وارد کنید"
                {...formik?.getFieldProps("PaymentInvoiceNumber")}
              />
            </div>

            <div className="w-full relative ">
              <label
                htmlFor="PeymentDate"
                className="block mb-2   text-[#455A64] dark:text-white"
              >
                تاریخ پرداخت{" "}
              </label>
              <input
                type="text"
                id="PeymentDate"
                name="PeymentDate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="تاریخ پرداخت خود را وارد کنید"
                {...formik?.getFieldProps("PeymentDate")}
                readOnly
                value={
                  formik.values.PeymentDate
                    ? convertIsoToJalali(formik.values.PeymentDate)
                    : ""
                }
                onFocus={() => {
                  setCalendar(true);
                }}
              />

              {calendar && (
                <Calendar
                  ref={CalenderRef}
                  // value={
                  //   formik.values.birthDay &&
                  //   convertIsoToJalali(formik?.values?.birthDay)
                  // }
                  onChange={handelChangeData}
                  calendar={persian}
                  locale={persian_fa}
                  className="bg-gray-50 border absolute top-[-256px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                />
              )}
            </div>
            <div className="mt-4 flex justify-end">
              {isPending ? (
                <button
                  type="submit"
                  className=" bg-[#2196F3] hover:bg-blue-700 dark:bg-blue-800  dark:hover:bg-blue-900 text-white font-bold py-3 h-[50px]  xl:mr-8 px-8 rounded items-center justify-center flex"
                >
                  <CustomSpinner color={"#FFF"} size={30} style={"flex"} />
                </button>
              ) : (
                <button
                  type="submit"
                  className=" bg-[#2196F3] hover:bg-blue-700 dark:bg-blue-800  dark:hover:bg-blue-900 text-white font-bold py-3  xl:mr-8 px-8 rounded"
                >
                  ثبت پرداخت
                </button>
              )}
              {}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export { BuyModal };

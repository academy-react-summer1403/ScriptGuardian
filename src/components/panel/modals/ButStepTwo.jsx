import { useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import React from "react";
import {
  usePayMentStepOne,
  usePayMentStepTwo,
} from "../../../core/services/api/Panel/handelBuy";
import { CustomSpinner } from "../../animation/CustomSpinner";
import { toast } from "react-toastify";

const ButStepTwo = ({ menuRef2, Click2, PaymentId, setImageStepTwo }) => {
  const queryClient = useQueryClient();

  const { data, mutate: StepOne, isPending } = usePayMentStepTwo();
  const formik = useFormik({
    initialValues: {
      PaymentId: PaymentId,
      Image: "",
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
            toast.success(data.message);
            queryClient.invalidateQueries("MyCourses", "MyPaymentCourses");
            setImageStepTwo(false);
          } else {
            toast.error("خطا در بارگزاری");
          }
        },
      });
    },
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    formik.setFieldValue("Image", file);
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-40 flex justify-center items-center">
        {/* Modal content */}
        <div
          ref={menuRef2}
          className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 w-96"
        >
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              رسید پرداخت{" "}
            </h2>
            <button
              onClick={Click2}
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
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="file_input"
              >
                انتخاب تصویر رسید{" "}
              </label>
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
                onChange={handleFileChange}
              />
            </div>

            <div className="mt-4 flex justify-end">
              {isPending ? (
                <button
                  type="submit"
                  className=" bg-[#2196F3] hover:bg-blue-700 dark:bg-blue-800  dark:hover:bg-blue-900 text-white font-bold py-3  xl:mr-8 px-8 rounded flex justify-center items-center"
                >
                  <CustomSpinner color={"#FFF"} size={30} style={"flex"} />
                </button>
              ) : (
                <button
                  type="submit"
                  className=" bg-[#2196F3] hover:bg-blue-700 dark:bg-blue-800  dark:hover:bg-blue-900 text-white font-bold py-3  xl:mr-8 px-8 rounded"
                >
                  ثبت رسید
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export { ButStepTwo };

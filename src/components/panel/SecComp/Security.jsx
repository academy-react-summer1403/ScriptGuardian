import React from "react";
import {
  useGetMySec,
  usePanelChangePassword,
  usePanelUpdateSec,
} from "../../../core/services/api/Panel/HandelChangePAss";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
const Security = () => {
  const queryClient = useQueryClient();

  const { data } = useGetMySec();

  const { mutate: UpdateSec } = usePanelUpdateSec();

  const formik = useFormik({
    initialValues: {
      twoStepAuth: data && data.twoStepAuth,
      recoveryEmail: data && data.recoveryEmail,
      baseUrl: "http://localhost:5173",
    },
    // validationSchema: validationEditPass,
    enableReinitialize: true,

    onSubmit(values) {
      UpdateSec(values, {
        onSuccess: () => {
          toast.success("عملیات با موفقیت انجام شد");
          queryClient.invalidateQueries("GetMySec");
        },
      });
    },
  });
  return (
    <>
      <form
        className="space-y-8 mt-20  sm:w-[43%] w-[50%] "
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200">
            جیمیل بازیابی{" "}
          </label>
          {/* <input
            type="text"
            className="mt-1 p-2 border border-gray-300 dark:border-gray-950 dark:bg-gray-800 rounded w-full dark:text-white"
            placeholder="جیمیل ریکاوری"
            name="recoveryEmail"
            id="recoveryEmail"
            {...formik.getFieldProps("recoveryEmail")}
          /> */}

          <input
            type="text"
            id="recoveryEmail"
            name="recoveryEmail"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            placeholder="جیمیل ریکاوری"
            {...formik.getFieldProps("recoveryEmail")}
          />
        </div>

        <div className="flex items-center ">
          <label
            htmlFor="twoStepAuth"
            className="text-gray-800 dark:text-gray-200 text-xl font-semibold"
          >
            احراز هویت دو مرحله‌ای
          </label>
          <input
            id="twoStepAuth"
            type="checkbox"
            {...formik.getFieldProps("twoStepAuth")}
            className="w-4 h-4 mr-1 border-gray-300 rounded-md bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 transition-all"
            checked={formik.values.twoStepAuth}
          />
        </div>

        <button
          type="submit"
          className="lg:w-[33.333%] sm:w-[50%]  bg-blue-500 dark:hover:bg-blue-700 dark:bg-blue-600 text-white p-2 rounded hover:bg-blue-600 transition mx-auto block"
        >
          ثبت اطلاعات
        </button>
      </form>
    </>
  );
};

export default Security;

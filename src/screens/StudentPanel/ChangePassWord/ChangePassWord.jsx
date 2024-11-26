import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaBell,
  FaBookOpen,
  FaCloudscale,
  FaComment,
  FaHamburger,
  FaHome,
  FaLock,
  FaMinus,
  FaMoon,
  FaShoppingCart,
  FaSignOutAlt,
  FaSun,
  FaUserCircle,
} from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { HiX } from "react-icons/hi";
import { MdDashboard, MdShoppingCart } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import userProfile from "../../.././images/StudentPanel/NavStudent/images.png";
import { usePanelChangePassword } from "../../../core/services/api/Panel/HandelChangePAss";
import { useFormik, validateYupSchema } from "formik";
import { validationEditPass } from "../../../core/services/validation/validationSchema/Panel";
import { toast } from "react-toastify";
import { CommonStudent } from "../../../components/HamberGerStudentPanel/CommonStudent";
import { StudentHamburger } from "../../../components/HamberGerStudentPanel/Studenthamburger";
const ChangePassWord = () => {
  //API

  const { mutate: ChangePassword } = usePanelChangePassword();

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: validationEditPass,

    onSubmit(values) {
      const { confirmPassword, ...dataToSend } = values;
      ChangePassword(dataToSend, {
        onSuccess: (data) => {
          if (data.success == true) {
            toast.success("رمز شما با موفقیت تغییر کرد");
            formik.resetForm();
          } else {
            toast.error("خطا در تغییر رمز");
          }
        },
      });
    },
  });

  //handel menu

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {/* hamburger */}
      <StudentHamburger
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div className="flex flex-col items-center ">
        {/* Common */}
        <CommonStudent
          toggleMenu={toggleMenu}
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
          title={"تغییر رمز عبور"}
        />

        {/* Unic */}

        <div className="flex flex-col  mt-20  sm:w-[43%] w-[50%]  ">
          <form className="" onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-200">
                رمز عبور فعلی
              </label>
              <input
                type="password"
                className="mt-1 p-2 border border-gray-300 dark:border-gray-950 dark:bg-gray-800 rounded w-full"
                placeholder="رمز عبور فعلی"
                name="oldPassword"
                id="oldPassword"
                {...formik.getFieldProps("oldPassword")}
              />
              {formik.touched.oldPassword && formik.errors.oldPassword ? (
                <div className="text-red-500">{formik.errors.oldPassword}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-200">
                رمز عبور جدید
              </label>
              <input
                type="password"
                className="mt-1 p-2 border border-gray-300 dark:border-gray-950 dark:bg-gray-800 rounded w-full "
                placeholder="رمز عبور جدید"
                name="newPassword"
                id="newPassword"
                {...formik.getFieldProps("newPassword")}
              />
              {formik.touched.newPassword && formik.errors.newPassword ? (
                <div className="text-red-500">{formik.errors.newPassword}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-200">
                تکرار رمز عبور جدید
              </label>
              <input
                type="password"
                className="mt-1 p-2 border  border-gray-300 dark:border-gray-950 dark:bg-gray-800  rounded w-full"
                placeholder="تکرار رمز عبور جدید"
                {...formik.getFieldProps("confirmPassword")}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="text-red-500">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>

            <button
              type="submit"
              className="lg:w-[33.333%] sm:w-[50%]  bg-blue-500 dark:hover:bg-blue-700 dark:bg-blue-600 text-white p-2 rounded hover:bg-blue-600 transition mx-auto block"
            >
              ثبت اطلاعات عبور
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export { ChangePassWord };

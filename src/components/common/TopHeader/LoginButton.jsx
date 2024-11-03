import { FaSignInAlt } from "react-icons/fa";
import React, { useEffect, useState } from "react";

import { LoginModal } from "../../Login/LoginModal";
import { LoginCodeVerification } from "../../Login/LoginCodeVerification";
import { RegisterModal } from "../../Login/RegisterModal";
import { RegisterCodeVerification } from "../../Login/RegisterCodeVerification";
import { RegisterFinish } from "../../Login/RegisterFinish";
import { getItem } from "../../../core/services/storage/storage.services";
import { useNavigate } from "react-router-dom";
const LoginButton = () => {
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoginVerificationOpen, setIsLoginVerification] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isRegisterVerificationOpen, setIsRegisterVerification] =
    useState(false);
  const [isRegisterFinishOpen, setIsRegisterFinishOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const toggleLoginVerificationModal = () => {
    setIsLoginVerification(!isLoginVerificationOpen);
  };

  const toggleRegisterModal = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  const toggleRegisterVerificationModal = () => {
    setIsRegisterVerification(!isRegisterVerificationOpen);
  };
  const toggleRegisterFinishModal = () => {
    setIsRegisterFinishOpen(!isRegisterFinishOpen);
  };

  //Menu

  const [menuOpen, setMenuOpen] = useState(false);

  //handel Token

  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token"); // توکن را از localStorage می‌گیریم
    setIsToken(!!token); // اگر توکن وجود داشت، مقدار true و اگر نداشت false تنظیم می‌شود
  }, []);

  const logOut = () => {
    localStorage.removeItem("token"); // توکن را حذف می‌کنیم
    setIsToken(false); // مقدار isToken را به false تغییر می‌دهیم
    setMenuOpen(false); // بستن منو بعد از خروج
  };

  const goToStudentPanel = () => {
    console.log("Going to student panel...");
    setMenuOpen(false);
    navigate("/panel");
  };

  return (
    <>
      {/* <div className="" onClick={logOut}>
        DeleteToken
      </div> */}
      {isToken ? (
        <>
          <div className="relative">
            {/* دکمه گرد */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center"
            >
              {/* آیکون یا نام */}
              <span>👤</span>
            </button>

            {/* منوی کشویی */}
            {menuOpen && (
              <div className="absolute right-[-150px] mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                <button
                  onClick={goToStudentPanel}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  رفتن به پنل دانشجو
                </button>
                <button
                  onClick={logOut}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  خروج از حساب کاربری
                </button>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <button
            onClick={toggleLoginModal}
            className="bg-[#2196F3] dark:bg-[#1565C0]  hover:bg-[#1976D2] dark:hover:bg-[#0D47A1] xl:w-[133px] lg:w-[100px] sm:w-[36px] w-[30px] xl:h-[48px] lg:h-[40px] sm:h-[36px] h-[30px]  xl:rounded-[80px] lg:rounded-[80px] rounded-[100%] text-white transition duration-300 "
          >
            <p className="lg:block hidden xl:text-[14px] lg:text-[14px]">
              ورود به حساب
            </p>
            <div className="lg:hidden w-full h-full flex items-center justify-center">
              <FaSignInAlt className="text-white sm:text-[18px] text-[16px]" />
            </div>
          </button>

          <LoginModal
            isOpen={isLoginOpen}
            toggleModal={toggleLoginModal}
            openVerification={toggleLoginVerificationModal}
            openRegister={toggleRegisterModal}
          />
          <LoginCodeVerification
            isOpen={isLoginVerificationOpen}
            toggleModal={toggleLoginVerificationModal}
          />
          <RegisterModal
            isOpen={isRegisterOpen}
            toggleModal={toggleRegisterModal}
            openVerification={toggleRegisterVerificationModal}
            openLogin={toggleLoginModal}
          />
          <RegisterCodeVerification
            isOpen={isRegisterVerificationOpen}
            toggleModal={toggleRegisterVerificationModal}
            OpenRegisterFinish={toggleRegisterFinishModal}
          />
          <RegisterFinish
            isOpen={isRegisterFinishOpen}
            toggleModal={toggleRegisterFinishModal}
          />
        </>
      )}
    </>
  );
};

export { LoginButton };

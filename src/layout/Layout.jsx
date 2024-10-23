import React, { useState, useEffect } from "react";
import { TopHeader } from "../components/common/TopHeader/TopHeader";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/common/Footer/Footer";
import { FaArrowUp } from "react-icons/fa";

const Layout = () => {
  const [isVisible, setIsVisible] = useState(false);

  // تابعی برای اسکرول به بالای صفحه
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // اسکرول نرم به بالا
    });
  };

  // بررسی وضعیت اسکرول و نمایش یا مخفی کردن دکمه
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // اضافه کردن listener برای دنبال کردن اسکرول
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <div className="container  xl:max-w-[1280px] mx-auto">
        <TopHeader />
      </div>

      <Outlet />

      <Footer />

      {/* دکمه اسکرول به بالا */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-800 dark:hover:bg-blue-600 dark:focus:ring-blue-400" 
          style={{ zIndex: 1000 }}
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export { Layout };

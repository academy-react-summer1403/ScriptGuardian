import React, { useState, useEffect } from "react";
import { TopHeader } from "../components/common/TopHeader/TopHeader";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/common/Footer/Footer";
import { FaArrowUp } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import { getItem } from "../core/services/storage/storage.services";

const Layout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location]);

  const Token = getItem("token");
  const id = getItem("id");
  console.log("Token", Token);

  return (
    <>
      {loading ? (
        <div className="w-full h-[100vh] flex justify-center items-center bg-">
          <ClipLoader
            color="#2196F3"
            size={50}
            className="absolute left-1/2 transform -translate-x-1/2  top-1/2 -translate-y-1/2"
          />
        </div>
      ) : (
        <>
          <div className="container xl:max-w-[1280px] mx-auto">
            <TopHeader />
          </div>

          <div key={location.pathname}>
            <Outlet />
          </div>

          <Footer />
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="fixed sm:bottom-5 bottom-1 right-5 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-800 dark:hover:bg-blue-600 dark:focus:ring-blue-400"
              style={{ zIndex: 1000 }}
            >
              <FaArrowUp size={24} />
            </button>
          )}
        </>
      )}
    </>
  );
};

export { Layout };

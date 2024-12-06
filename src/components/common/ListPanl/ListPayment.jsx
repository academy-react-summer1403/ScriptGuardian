import React, { useEffect, useRef, useState } from "react";
import {
  FaCamera,
  FaCreditCard,
  FaEye,
  FaFileInvoice,
  FaPaypal,
  FaTrash,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { convertIsoToJalali } from "../../../core/utils/dateUtils";
import noProfile from "../../../images/NewsDetails/default_image.png";
import { BuyModal } from "../../panel/modals/BuyModal";
import { ButStepTwo } from "../../panel/modals/ButStepTwo";
import { convertEnToPe } from "persian-number";

const ListPayment = ({
  courseTitle,
  fullName,
  cost,
  courseId,
  lastUpdate,
  paymentStatus,
  paid,
  peymentDate,
  paymentInvoiceImage,
  insertDate,
  PaymentId,
  accept,
  groupName,
}) => {
  const navigate = useNavigate();

  const [IsOpen, setIsOpen] = useState(false);
  const [imageStepTwo, setImageStepTwo] = useState(false);
  //   const [PaymentId, setPaymentId] = useState("");

  const menuRef = useRef(null);
  const menuRef2 = useRef(null);
  const menuRef3 = useRef(null);

  const Click = () => {
    setIsOpen(!IsOpen);
  };

  const Click2 = () => {
    setImageStepTwo(!imageStepTwo);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (IsOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [IsOpen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setImageStepTwo(false);
      }
    };

    if (imageStepTwo) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [imageStepTwo]);

  //modal Screen SHot

  const [isScreenOpen, setIsScreenOpen] = useState(false);

  const openScreenModal = () => setIsScreenOpen(true);
  const closeScreenModal = () => setIsScreenOpen(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef3.current && !menuRef3.current.contains(event.target)) {
        setIsScreenOpen(false);
      }
    };

    if (isScreenOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isScreenOpen]);

  return (
    <>
      <div className="flex items-center text-white h-[50px] bg-[#8cc9fa] dark:bg-[#1e3e57]  w-full rounded-xl mb-2 sm:text-base md:text-base  text-[10px] justify-around">
        <div className=" h-full    items-center flex sm:mr-0 mr-3  sm:w-[107px] w-[80px]  sm:text-base text-[8px] bg-">
          {paid && convertEnToPe(paid)}{" "}
          <span className="sm:text-xs ">تومان</span>
        </div>
        <div className="w-[77px] lg:block hidden  ">
          {peymentDate && convertEnToPe(convertIsoToJalali(peymentDate))}
        </div>
        <div className="w-[77px]  lg:block hidden">
          {insertDate && convertEnToPe(convertIsoToJalali(insertDate))}
        </div>

        <div className=" sm:w-[121px] w-[60px] sm:text-base text-[12px] bg-">
          {paymentInvoiceImage ? (
            <div
              className="flex items-center gap-x-1 cursor-pointer"
              onClick={openScreenModal}
            >
              نمایش
              <FaEye color="white" />
            </div>
          ) : (
            "ثبت نشده"
          )}

          {isScreenOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div
                className="bg-white rounded-lg shadow-xl overflow-hidden max-w-2xl w-full h-[500px] relative"
                ref={menuRef3}
              >
                <div className="relative h-[100%]">
                  <img
                    src={paymentInvoiceImage}
                    alt="Screenshot"
                    className="w-full h-auto z-10"
                  />

                  <button
                    onClick={closeScreenModal}
                    className="absolute top-4 left-4 bg-red-500 text-white rounded-full p-4 hover:bg-red-600 transition-all duration-300"
                  >
                    ✕
                  </button>
                </div>
                <div className="absolute right-2 top-2 z-50 w-[250px] h-[80px] bg-white text-black rounded-lg shadow-lg flex items-center justify-center">
                  <span className=" text-center text-lg">
                    نام گروه:
                    {groupName}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="sm:w-[130px] w-[65px] sm:text-base text-[8px] bg-">
          {accept ? "تایید شده" : "تایید نشده"}
        </div>
        <div className="flex gap-x-1 w-[46px] sm:text-base text-[8px]  bg-">
          <FaEye
            className="cursor-pointer sm:text-[20px] text-[12px]"
            onClick={() => {
              navigate(`/courses/${courseId}`);
            }}
          />

          {paymentInvoiceImage ? (
            <FaFileInvoice
              color="green"
              title="پرداخت"
              className="cursor-pointer sm:text-[20px] text-[12px]"
              onClick={Click}
            />
          ) : (
            <FaCamera
              className="cursor-pointer sm:text-[20px] text-[12px]"
              onClick={Click2}
            />
          )}

          {IsOpen && (
            <>
              <BuyModal
                menuRef={menuRef}
                Click={Click}
                setImageStepTwo={setImageStepTwo}
                setIsOpen={setIsOpen}
                courseId={courseId}
                setPaymentId={""} //
              />
            </>
          )}

          {imageStepTwo && (
            <>
              <ButStepTwo
                Click2={Click2}
                menuRef2={menuRef2}
                PaymentId={PaymentId}
                setImageStepTwo={setImageStepTwo}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export { ListPayment };

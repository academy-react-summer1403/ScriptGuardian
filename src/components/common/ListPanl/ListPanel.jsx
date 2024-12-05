import React, { useEffect, useRef, useState } from "react";
import {
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

const ListPanel = ({
  tumbImageAddress,
  courseTitle,
  fullName,
  cost,
  courseId,
  lastUpdate,
  paymentStatus,
}) => {
  const navigate = useNavigate();

  const [IsOpen, setIsOpen] = useState(false);
  const [imageStepTwo, setImageStepTwo] = useState(false);
  const [PaymentId, setPaymentId] = useState("");

  const menuRef = useRef(null);
  const menuRef2 = useRef(null);

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

  return (
    <>
      <div className="flex items-center text-white h-[50px] bg-[#8cc9fa] dark:bg-[#1e3e57]  w-full rounded-xl mb-2 sm:text-base md:text-base  text-[10px]  justify-around">
        <div className="h-full w-[70px]    items-center md:flex  hidden">
          <img
            src={
              tumbImageAddress && tumbImageAddress != "Not-set"
                ? tumbImageAddress
                : noProfile
            }
            alt=""
            className="w-full object-cover h-[80%] rounded block"
          />
        </div>
        <div className="w-[66px]" title={courseTitle}>
          {courseTitle.length > 10
            ? courseTitle.slice(0, 10) + "..."
            : courseTitle}
        </div>
        <div className="w-[120px]" title={fullName}>
          {fullName.length > 10 ? fullName.slice(0, 10) + "..." : fullName}
        </div>
        <div className="w-[80px]">
          {" "}
          <strong>
            {lastUpdate && convertEnToPe(convertIsoToJalali(lastUpdate))}
          </strong>
        </div>
        <div className="text-xs w-[80px]">
          {/* {parseFloat(cost).toString()}  */}

          {cost?.length > 6 ? (
            <>
              {cost &&
                convertEnToPe(parseFloat(cost).toString().slice(0, 6)) + "..."}
              <span className="  ">تومان</span>
            </>
          ) : (
            <>
              {cost && convertEnToPe(parseFloat(cost).toString().slice(0, 6))}
              <span className="  ">تومان</span>
            </>
          )}
        </div>

        <div className="w-[102px]">{paymentStatus && paymentStatus}</div>
        <div className="w-[50px] flex gap-x-1">
          <FaEye
            className="cursor-pointer"
            onClick={() => {
              navigate(`/courses/${courseId}`);
            }}
          />
          <FaFileInvoice
            size={20}
            color="green"
            title="پرداخت"
            className="cursor-pointer"
            onClick={Click}
          />

          {IsOpen && (
            <>
              <BuyModal
                menuRef={menuRef}
                Click={Click}
                setImageStepTwo={setImageStepTwo}
                setIsOpen={setIsOpen}
                courseId={courseId}
                setPaymentId={setPaymentId}
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

export { ListPanel };

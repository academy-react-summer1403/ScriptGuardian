import React, { useState } from "react";
import Image from "../../../images/StudentPanel/NavStudent/images.png";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useAddProfileImage } from "../../../core/services/api/Panel/handelUserProfile";
import { useQueryClient } from "@tanstack/react-query";
import { Gallery } from "./child/Gallery";

const HandelProfile = ({ data }) => {
  const queryClient = useQueryClient();

  // State برای ذخیره تصویر انتخاب شده
  const [selectedImage, setSelectedImage] = useState(null);

  //API
  const { mutate: AddProfile } = useAddProfileImage();
  const formik = useFormik({
    initialValues: {
      formFile: null,
    },
    // validationSchema: "",
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("formFile", values.formFile);
      AddProfile(formData, {
        onSuccess: (formData) => {
          if (formData.success) {
            toast.success("    عکس شما با موفقیت به گالری اتان ارسال شد");
            queryClient.invalidateQueries("GetStudentProfile");
            setSelectedImage(null);
          } else {
            toast.error(" ناموفق بود");
          }
        },
      });
    },
  });

  //handel Gallery

  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);

  // تابع برای باز کردن مدال گالری
  const HandelGalleryModal = () => {
    setIsGalleryModalOpen(!isGalleryModalOpen);
  };

  return (
    <>
      <div className="mt-10 flex flex-col sm:items-start item-center justify-center ">
        <div className="w-[200px] h-[200px]">
          {" "}
          <img
            src={
              selectedImage
                ? selectedImage
                  ? selectedImage
                  : Image
                : data?.currentPictureAddress &&
                  data?.currentPictureAddress != "Not-set"
                ? data?.currentPictureAddress
                : Image
            }
            alt=""
            className="w-full h-full rounded-full"
          />
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col  items-center  w-full"
        >
          <label
            className="flex justify-center items-center mt-3 text-[#455A64] dark:text-gray-400 cursor-pointer font-medium hover:text-[#1E2A35] hover:scale-105 transform transition duration-300 ease-in-out px-4 py-2 rounded-md shadow-md hover:shadow-lg dark:bg-gray-800 bg-gray-100"
            htmlFor="formFile"
            name="formFile"
          >
            اضافه کردن تصویر
          </label>
          <input
            type="file"
            id="formFile"
            name="formFile"
            className="hidden"
            onChange={(event) => {
              const file = event.currentTarget.files[0];

              formik.setFieldValue("formFile", event.currentTarget.files[0]);
              setSelectedImage(URL.createObjectURL(file));
            }}
          />

          <button
            type="submit"
            className="block px-6 py-3 mt-4 bg-[#2196F3] text-white font-semibold rounded-lg shadow-lg dark:bg-blue-800 transition duration-300 ease-in-out"
          >
            ارسال
          </button>
        </form>

        <h3 className="mx-auto mt-3 text-[#455A64] dark:text-gray-400 text-lg font-semibold flex justify-center items-center space-x-2">
          <button
            onClick={HandelGalleryModal}
            className="px-6 py-3 mt-1 mb-5 bg-[#4CAF50] text-white font-medium rounded-lg shadow-md hover:bg-[#45A049] dark:bg-[#388E3C] dark:hover:bg-[#2C6F3F] transition duration-300 ease-in-out transform hover:scale-105"
          >
            گالری
          </button>
        </h3>
      </div>

      {/* مدال گالری */}
      {isGalleryModalOpen && (
        <Gallery
          gallery={data}
          HandelGalleryModal={HandelGalleryModal}
          setIsGalleryModalOpen={setIsGalleryModalOpen}
        />
      )}
    </>
  );
};

export { HandelProfile };

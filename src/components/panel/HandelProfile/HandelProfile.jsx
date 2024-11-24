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
                : data?.currentPictureAddress && data?.currentPictureAddress != "Not-set"
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
            className="flex justify-center  mt-3 text-[#455A64] dark:text-gray-400 cursor-pointer"
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

          <button type="submit" className="block">
            ارسال
          </button>
        </form>

        <h3 className="mx-auto mt-3 text-[#455A64] dark:text-gray-400">
          <button onClick={HandelGalleryModal}>گالری</button>
        </h3>
      </div>

      {/* مدال گالری */}
      {isGalleryModalOpen && (
        <Gallery gallery={data} HandelGalleryModal={HandelGalleryModal} />
      )}
    </>
  );
};

export { HandelProfile };

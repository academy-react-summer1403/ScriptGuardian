import { useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon
import {
  useDeleteProfileImage,
  useSelectProfileImage,
} from "../../../../core/services/api/Panel/handelUserProfile";
import { toast } from "react-toastify";

const Gallery = ({ gallery, HandelGalleryModal }) => {
  const queryClient = useQueryClient();

  // State برای ذخیره آیدی تصویر انتخاب شده
  const [selectedImage, setSelectedImage] = useState(null);
  const [takeID, setTakeId] = useState(null);

  // تابع برای انتخاب تصویر
  const handleSelectImage = ({ index, DeleteEntityId }) => {
    setSelectedImage(index);
    setTakeId(DeleteEntityId);
  };

  // تابع برای لغو انتخاب تصویر
  const handleDeselectImage = () => {
    setSelectedImage(null);
    setTakeId(null);
  };

  //API

  // State برای ذخیره تصویر انتخاب شده
  //API
  //Select
  const { mutate: SelectImage } = useSelectProfileImage();
  const selectImage = () => {
    const formData = new FormData();
    formData.append("ImageId", takeID);
    SelectImage(formData, {
      onSuccess: (data) => {
        if (data.success == true) {
          toast.success("با موفقیت انتخاب شد");
          setTakeId(null);
          setSelectedImage(null);
          queryClient.invalidateQueries("GetStudentProfile");
        } else {
          toast.error("   خطا در انتخاب");
        }
      },
    });
  };

  //Delete
  const { mutate: DeleteImage } = useDeleteProfileImage();
  const handelDelete = () => {
    const formData = new FormData();
    formData.append("DeleteEntityId", takeID);
    DeleteImage(formData, {
      onSuccess: (data) => {
        if (data.success == true) {
          toast.success("با موفقیت حذف شد");
          setTakeId(null);
          setSelectedImage(null);
          queryClient.invalidateQueries("GetStudentProfile");
        } else {
          toast.error("   خطا در حذف");
        }
      },
    });
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center mb-5">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[60%] max-h-[80%] overflow-auto">
          <div className="flex justify-between items-center">
            <h3 className="text-[#455A64] dark:text-gray-400 text-xl">گالری</h3>
            <button
              onClick={HandelGalleryModal}
              className="text-red-500 text-3xl"
            >
              <AiOutlineClose />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Map through images and display them */}
            {gallery?.userImage?.map((item, index) => (
              <div key={index} className="relative group">
                <img
                  src={item?.puctureAddress}
                  alt={`Gallery Image ${index + 1}`}
                  onClick={() => {
                    handleSelectImage({
                      index: index,
                      DeleteEntityId: item?.id,
                    });
                  }}
                  className={`w-full h-full object-cover rounded-md shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105 ${
                    selectedImage === index ? "border-4 border-blue-500" : ""
                  }`}
                />
                {/* دکمه لغو انتخاب */}
                {selectedImage === index && (
                  <button
                    onClick={handleDeselectImage}
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded-lg mt-2 text-sm"
                  >
                    لغو انتخاب
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <button onClick={handelDelete}>حذف</button>
            <button onClick={selectImage}>انتخاب برای پروفایل</button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Gallery };

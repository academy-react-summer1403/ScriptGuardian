import { useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon
import {
  useDeleteProfileImage,
  useSelectProfileImage,
} from "../../../../core/services/api/Panel/handelUserProfile";
import { toast } from "react-toastify";
import { CustomSpinner } from "../../../animation/CustomSpinner";

const Gallery = ({
  gallery,
  HandelGalleryModal,
  setIsGalleryModalOpen,
  menuRef,
}) => {
  const queryClient = useQueryClient();

  const [selectedImage, setSelectedImage] = useState(null);
  const [takeID, setTakeId] = useState(null);

  const handleSelectImage = ({ index, DeleteEntityId }) => {
    setSelectedImage(index);
    setTakeId(DeleteEntityId);
  };

  const handleDeselectImage = () => {
    setSelectedImage(null);
    setTakeId(null);
  };

  //API

  //API
  //Select
  const { mutate: SelectImage, isPending } = useSelectProfileImage();
  const selectImage = () => {
    const formData = new FormData();
    formData.append("ImageId", takeID);
    SelectImage(formData, {
      onSuccess: (data) => {
        if (data.success == true) {
          toast.success("با موفقیت انتخاب شد");
          setIsGalleryModalOpen(false);
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
  const { mutate: DeleteImage, isPending: deletePending } =
    useDeleteProfileImage();
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
        <div
          ref={menuRef}
          className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[60%] max-h-[80%] overflow-auto"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-[#455A64] dark:text-gray-400 text-xl">گالری</h3>
            <button
              onClick={HandelGalleryModal}
              className="text-red-500 text-3xl"
            >
              <AiOutlineClose />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4  min-h-[200px]">
            {gallery?.userImage != 0 ? (
              gallery?.userImage?.map((item, index) => {
                return (
                  <div key={index} className="relative group cursor-pointer">
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
                        selectedImage === index
                          ? "border-4 border-blue-500"
                          : ""
                      }`}
                    />
                    {selectedImage === index && (
                      <button
                        onClick={handleDeselectImage}
                        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded-lg mt-2 text-sm"
                      >
                        لغو انتخاب
                      </button>
                    )}
                  </div>
                );
              })
            ) : (
              <h2 className="text-[30px] text-nowrap mr-[180px] mt-[100px]">
                هیچ عکسی در گالری اتان وجود ندارد!!
              </h2>
            )}
          </div>

          <div className="flex  gap-x-4 mt-4 ">
            {isPending ? (
              <button
                onClick={selectImage}
                className={`w-[168px] h-[48px] bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out justify-center flex items-center transform hover:scale-105 ${
                  takeID ? "opacity-100" : "opacity-0"
                }`}
              >
                <CustomSpinner color={"FFF"} size={34} />
              </button>
            ) : (
              <button
                onClick={selectImage}
                className={`px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 ${
                  takeID ? "opacity-100" : "opacity-0"
                }`}
              >
                انتخاب برای پروفایل
              </button>
            )}

            {deletePending ? (
              <button
                onClick={handelDelete}
                className={`px-6 h-[48px] bg-red-500 justify-center flex items-center text-white font-medium rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 ${
                  takeID ? "opacity-100" : "opacity-0"
                }`}
              >
                <CustomSpinner color={"FFF"} size={28} />
              </button>
            ) : (
              <button
                onClick={handelDelete}
                className={`px-6 py-3 bg-red-500 text-white font-medium rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 ${
                  takeID ? "opacity-100" : "opacity-0"
                }`}
              >
                حذف
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { Gallery };

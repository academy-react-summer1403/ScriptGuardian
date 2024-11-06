import React from "react";
import { useAddRateNews } from "../../core/services/api/News/HandelRateNews";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import {
  useAddLikeNews,
  useDeleteLikeNews,
  useDissAddLikeNews,
} from "../../core/services/api/DetailNews/handelNewsLike";
const MidDetails = ({
  currentUserSetRate,
  currentUserRateNumber,
  id,
  currentUserIsLike,
  currentLikeCount,
  currentUserIsDissLike,
  currentDissLikeCount,
  likeId,
}) => {
  const queryClient = useQueryClient();

  const totalStars = 5; // تعداد کل ستاره‌ها
  const { mutate: AddRate } = useAddRateNews();
  const addRate = (index) => {
    AddRate(
      { NewsId: id, RateNumber: index + 1 },
      {
        onSuccess: (data) => {
          if (
            currentUserSetRate === true &&
            data.message !== "هشدار ایجاد هرزنامه در دیتابیس"
          ) {
            if (data.success === true) {
              queryClient.invalidateQueries("DetailNews");
              toast.success("امتیاز شما با موفقیت تغییر کرد");
            } else {
              toast.error("   خطا در تغییر امتیاز");
            }
          } else if (
            data.success === true &&
            data.message == "هشدار ایجاد هرزنامه در دیتابیس"
          ) {
            toast.error(data.message);
          } else {
            if (data.success === true) {
              queryClient.invalidateQueries("DetailNews");
              toast.success("امتیاز شما با موفقیت ثبت شد");
            } else {
              toast.error("   خطا در ثبن امتیاز");
            }
          }
        },
      }
    );
  };

  //handel API handel Like  News

  const { mutate: AddLike } = useAddLikeNews();
  const { mutate: DeleteLike } = useDeleteLikeNews();
  const { mutate: DissLike } = useDissAddLikeNews();
  const handleLike = () => {
    if (currentUserIsLike === true) {
      DeleteLike(likeId, {
        onSuccess: () => {
          queryClient.invalidateQueries("DetailNews");
          toast.success("با موفقیت  لایک  برداشته شد");
        },
      });
      queryClient.invalidateQueries("DetailNews");
    } else {
      AddLike(id, {
        onSuccess: () => {
          queryClient.invalidateQueries("DetailNews");
          toast.success("با موفقیت لایک شد");
        },
      }),
        {};
    }
  };

  const handleDissLike = () => {
    if (currentUserIsDissLike === true) {
      DeleteLike(likeId, {
        onSuccess: () => {
          queryClient.invalidateQueries("DetailNews");
          toast.success("با موفقیت دیس لایک  برداشته شد");
        },
      });
      queryClient.invalidateQueries("DetailNews");
    } else {
      DissLike(id, {
        onSuccess: () => {
          toast.success("با موفقیت دیس لایک شد");

          queryClient.invalidateQueries("DetailNews");
        },
      });
    }
  };

  return (
    <div className="container flex bg- mx-auto justify-center">
      <div className="flex flex-col xl:w-[842px]   bg- w-[95%] sm:items-start items-center mx-auto">
        <div className="w-full flex flex-col  mt-12">
          <div className="">
            <h2 className="text-[#263238] lg:text-[24px]  md:text-[22px] sm:text-2xl text-xl font-bold dark:text-gray-200 ">
              چگونه آموزش ببینیم
            </h2>
            <p className="mt-3 font-normal tracking-[-0.01em] text-[#455A64] dark:text-gray-400 md:text-base sm:text-base text-xs">
              قبل از هر چیزی باید بدانیم که نمیشه یک روند یا روش خاصی رو برای
              همه افراد که ذهنیت های متفاوتی هم از هم دارند، در نظر گرفت. ولی خب
              هدف تمامی این افراد آموزش دیدن و رسیدن به درک عمیقی از اون مطلب
              است ولی آیا برای تمامی افراد آموزش دیدن به این جا ختم میشود و همه
              به درک عمیقی از اون مطلب میرسند؟ قطعا خیر. در ادامه به نحوه رسیدن
              به درک عمیق مطلب، مناسب برای تمامی افراد صحبت خواهیم کرد. مثال:
              فرض کنید شما در حال خواندن یک کتاب هستید، در صفحه 30 یک چیزی را
              متوجه نشدین. در حالت عادی شما به یک صفحه قبل میروید و دوباره
              خواندن را شروع میکنید و فرض کنید در صفحه 40 هم دقیقا همین اتفاق
              میافتد و به یک صفحه قبل برمیگردید و دوباره خواندن را شروع میکنید و
              تا رسیدن به آخرین صفحه این کتاب این چرخه بارها و بارها اتفاق
              میافتد. نکته و البته جواب ما اینجاست که شما اگر در صفحه 30 نکته را
              متوجه نشدین، برای رسیدن به درک عمیق باید به جای صفحه قبلی، به صفحه
              1 کتاب برگردین و کتاب را از اول دوباره بخوانید، دوباره اگر در صفحه
              50 نکته ای را متوجه نشدین، دوباره کتاب را از اول شروع کنید. شما تا
              پایان این کتاب به درک عمیق اون مطلبی که قرار بود آموزش ببینید
              میرسید.
            </p>

            <div className="flex md:text-base sm:text-sm text-xs  mt-3 text-[#455A64] dark:text-gray-400 ">
              <span className="mt-2 ml-2">
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3" cy="3" r="3" fill="#2196F3" />
                </svg>
              </span>

              <p>
                <span className="font-semibold text-[#263238] dark:text-gray-200">
                  افزایش انرژی:
                </span>
                کافئین به‌عنوان یک محرک عصبی عمل می‌کند و با ورود به جریان خون،
                کافئین به مغز می‌رود و سیستم عصب مرکزی را تحریک می‌کند. این
                احتشام ممکن است احساس افزایش انرژی و کاهش خستگی را در شما به
                ارمغان بیاورد.
              </p>
            </div>
            <div className="flex md:text-base sm:text-sm text-xs   mt-3 text-[#455A64] dark:text-gray-400 ">
              <span className="mt-2 ml-2">
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3" cy="3" r="3" fill="#2196F3" />
                </svg>
              </span>

              <p>
                <span className="font-semibold text-[#263238] dark:text-gray-200">
                  افزایش انرژی:
                </span>
                کافئین به‌عنوان یک محرک عصبی عمل می‌کند و با ورود به جریان خون،
                کافئین به مغز می‌رود و سیستم عصب مرکزی را تحریک می‌کند. این
                احتشام ممکن است احساس افزایش انرژی و کاهش خستگی را در شما به
                ارمغان بیاورد.
              </p>
            </div>
            <div className="flex md:text-base sm:text-sm text-xs   mt-3 text-[#455A64] dark:text-gray-400 ">
              <span className="mt-2 ml-2">
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3" cy="3" r="3" fill="#2196F3" />
                </svg>
              </span>

              <p>
                <span className="font-semibold text-[#263238] dark:text-gray-200">
                  افزایش انرژی:
                </span>
                کافئین به‌عنوان یک محرک عصبی عمل می‌کند و با ورود به جریان خون،
                کافئین به مغز می‌رود و سیستم عصب مرکزی را تحریک می‌کند. این
                احتشام ممکن است احساس افزایش انرژی و کاهش خستگی را در شما به
                ارمغان بیاورد.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[480px] mt-12  ">
          <video controls loop muted className="w-full h-full rounded-3xl">
            <source src="/path-to-your-video/video.mp4" type="video/mp4" />
            مرورگر شما تگ ویدیو را ساپورت نمی کند
          </video>
        </div>
        <div className="mt-12 text-[#455A64] dark:text-gray-400 tracking-tight">
          <p className="md:text-base sm:text-sm text-xs">
            این مثال برای آموزش از روی کتاب بود ولی برای ویدئو یا پادکست یا هر
            آنچه که میتوانید از آن مطلبی یاد بگیرید هم صدق میکند. شما در مثال
            بالا با هر بار از نو آموزش دیدن، هم مطلب را مرور میکنید و هم نکته
            هایی مهم که در طول آموزش متوجه نشده بودین را متوجه میشوید و این اصل
            قضیه است.
          </p>
          <p className="mt-4 md:text-base sm:text-sm text-xs">
            امیدوارم مقاله مفیدی برای شما واقع بوده باشه.
          </p>
        </div>
        <div className="w-full bg-[#ECEFF1] dark:bg-[#1C1C1E] flex h-[64px] rounded-2xl justify-between items-center mt-10 md:text-base sm:text-sm text-xs">
          <div className="w-[103px] flex items-center mr-[22px] gap-x-[8px] text-[#263238] dark:text-gray-200">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1338 5.1416C15.8005 6.29993 16.9505 8.1416 17.1838 10.2666"
                  className="stroke-[#263238] dark:stroke-gray-200"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.9082 10.3081C3.12487 8.19144 4.2582 6.34977 5.9082 5.18311"
                  className="stroke-[#263238] dark:stroke-gray-200"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.8252 17.4502C7.79186 17.9419 8.89186 18.2169 10.0502 18.2169C11.1669 18.2169 12.2169 17.9669 13.1585 17.5085"
                  className="stroke-[#263238] dark:stroke-gray-200"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.0501 6.41654C11.3295 6.41654 12.3667 5.37933 12.3667 4.09987C12.3667 2.82041 11.3295 1.7832 10.0501 1.7832C8.77061 1.7832 7.7334 2.82041 7.7334 4.09987C7.7334 5.37933 8.77061 6.41654 10.0501 6.41654Z"
                  className="stroke-[#263238] dark:stroke-gray-200"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.02467 16.6001C5.30413 16.6001 6.34134 15.5629 6.34134 14.2835C6.34134 13.004 5.30413 11.9668 4.02467 11.9668C2.74521 11.9668 1.70801 13.004 1.70801 14.2835C1.70801 15.5629 2.74521 16.6001 4.02467 16.6001Z"
                  className="stroke-[#263238] dark:stroke-gray-200"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.9749 16.6001C17.2543 16.6001 18.2915 15.5629 18.2915 14.2835C18.2915 13.004 17.2543 11.9668 15.9749 11.9668C14.6954 11.9668 13.6582 13.004 13.6582 14.2835C13.6582 15.5629 14.6954 16.6001 15.9749 16.6001Z"
                  className="stroke-[#263238] dark:stroke-gray-200"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h3 className="tracking-tighter font-bold">اشتراک گزاری</h3>
          </div>
          <div className="w-[128px] flex gap-x-4 ml-6">
            <div className="w-[32px] h-[32px] rounded-full bg-[#B0BEC5] dark:bg-[#37474F] flex justify-center items-center">
              <span>
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.75117 3.22523H9.44455V0.243386C9.1524 0.202753 8.14766 0.111328 6.97752 0.111328C4.53599 0.111328 2.86348 1.66398 2.86348 4.51768V6.75328H0.555664V10.0868H2.86348V17.8883L6.166 17.8891V10.0875H8.75128L9.16168 6.75406H6.16523V4.84821C6.16677 3.88474 6.42337 3.22523 7.75117 3.22523Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <div className="w-[32px] h-[32px] rounded-full bg-[#B0BEC5] dark:bg-[#37474F] flex justify-center items-center">
              <span>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.3323 4.43657C16.027 3.93153 16.6281 2.75463 16.8889 1.91366C16.212 2.32723 15.186 1.86216 14.3895 2.02589C11.9629 -0.62232 7.61861 1.72071 8.41064 5.29753C5.49812 5.1507 2.92069 3.72167 1.18878 1.54314C0.231813 3.2466 0.766022 5.31213 2.26537 6.33913C1.70219 6.32837 1.15089 6.16002 0.682807 5.89712C0.682807 7.74664 1.94737 9.13955 3.48982 9.4624C2.95413 9.61307 2.29584 9.60692 1.90874 9.51929C2.36196 10.9399 3.65105 11.9853 5.18235 12.0191C3.65179 13.2452 1.73191 13.7249 0 13.5004C1.5521 14.5251 3.391 15.1109 5.37404 15.1109C11.5505 15.1109 15.5857 9.83369 15.3323 4.43657Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <div className="w-[32px] h-[32px] rounded-full bg-[#2196F3] dark:bg-[#1565C0] flex justify-center items-center">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.00077 0.897176C7.37795 0.897176 6.83894 0.894472 6.36877 0.892114C4.01288 0.880296 3.38552 0.877149 2.6052 1.26628C1.74334 1.69535 1.12446 2.50713 0.967423 3.59465L0.965278 3.60941C0.918793 3.92906 0.90555 4.02013 0.902505 5.69365C0.900641 6.64097 0.897173 7.45611 0.894177 8.1606C0.877301 12.1279 0.875352 12.5862 1.25862 13.3811C1.63391 14.162 2.35109 14.7487 3.19626 14.9676C3.78957 15.1207 4.20844 15.1203 6.78196 15.1179C7.13959 15.1176 7.53883 15.1172 7.98593 15.1172C8.58927 15.1172 9.11095 15.1193 9.56582 15.1212H9.56617C11.4267 15.1287 12.1692 15.1318 12.8096 14.9663C13.6597 14.7462 14.3639 14.1688 14.7472 13.3768C15.1192 12.6076 15.1156 12.0226 15.1019 9.77664V9.77658V9.77652V9.77644C15.0989 9.27491 15.0953 8.69057 15.0953 8.00286C15.0953 7.30781 15.0998 6.71685 15.1037 6.20871C15.12 4.07896 15.1252 3.4041 14.7398 2.61842C14.5766 2.28641 14.3954 2.03787 14.1327 1.78438C13.1819 0.874317 12.0695 0.883847 10.7925 0.894789C10.6346 0.896142 10.4742 0.897516 10.3112 0.897176H8.00077ZM7.99804 11.4304C6.11049 11.4304 4.57473 9.89466 4.57473 8.0071C4.57473 6.11955 6.11049 4.58379 7.99804 4.58379C9.8856 4.58379 11.4214 6.11955 11.4214 8.0071C11.4214 9.89466 9.8856 11.4304 7.99804 11.4304ZM12.9982 4.07555C12.9982 4.68207 12.5388 5.13958 11.9292 5.13958C11.3419 5.13958 10.8609 4.7068 10.8609 4.07555C10.8609 3.46904 11.3202 3.01152 11.9298 3.01152C12.5147 3.01152 12.9982 3.44307 12.9982 4.07555Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="w-full  lg:h-[48px] flex flex-wrap lg:justify-between justify-center mt-[40px]">
          <div className="flex items-center lg:justify-start justify-between lg:w-auto  w-full   sm:text-base text-xs">
            {/* Stars */}
            <div className="flex gap-x-2 items-center  ">
              <div className="flex flex-row-reverse">
                {Array.from({ length: totalStars }).map((_, index) => (
                  <span key={index} onClick={() => addRate(index)}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7299 3.51014L15.4899 7.03014C15.7299 7.52014 16.3699 7.99014 16.9099 8.08014L20.0999 8.61014C22.1399 8.95014 22.6199 10.4301 21.1499 11.8901L18.6699 14.3701C18.2499 14.7901 18.0199 15.6001 18.1499 16.1801L18.8599 19.2501C19.4199 21.6801 18.1299 22.6201 15.9799 21.3501L12.9899 19.5801C12.4499 19.2601 11.5599 19.2601 11.0099 19.5801L8.01991 21.3501C5.87991 22.6201 4.57991 21.6701 5.13991 19.2501L5.84991 16.1801C5.97991 15.6001 5.74991 14.7901 5.32991 14.3701L2.84991 11.8901C1.38991 10.4301 1.85991 8.95014 3.89991 8.61014L7.08991 8.08014C7.61991 7.99014 8.25991 7.52014 8.49991 7.03014L10.2599 3.51014C11.2199 1.60014 12.7799 1.60014 13.7299 3.51014Z"
                        className={`stroke-[#FFC107] dark:stroke-[#FF8F00] ${
                          index < currentUserRateNumber
                            ? "fill-[#FFC107] dark:fill-[#FF8F00]"
                            : ""
                        }`}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                ))}
              </div>

              <p className="md:mr-3 text-[#263238] dark:text-gray-200">
                امتیاز 20 نفر
              </p>
            </div>
            <div className="flex items-center">
              <button className="sm:mr-4 mr-2 h-[32px]  w-[81px] flex justify-center items-center bg-[#2196F3] dark:bg-[#1565C0] text-white shadow-Second-shadow rounded-[80px] text-[12px]">
                ثبت دیدگاه
              </button>
            </div>
          </div>

          <div className="flex items-center  lg:w-auto w-full   sm:text-base text-xs lg:mt-0 mt-7 lg:justify-start justify-between">
            <p className="sm:ml-6 text-[#455A64] dark:text-gray-400">
              آیا از این مقاله راضی بودید ؟
            </p>
            {/* <div className="flex items-center">
              <div className="items-center flex sm:mr-0 mr-10  sm:w-[83px] w-[63px] h-[48px] bg-[#ECEFF1] sm:ml-4 ml-2 rounded-[50px] dark:bg-[#37474F] ">
                <span className="sm:mr-4 mr-2 sm:w-[24px] sm:h-[24px] w-5 h-5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.48047 18.35L10.5805 20.75C10.9805 21.15 11.8805 21.35 12.4805 21.35H16.2805C17.4805 21.35 18.7805 20.45 19.0805 19.25L21.4805 11.95C21.9805 10.55 21.0805 9.34997 19.5805 9.34997H15.5805C14.9805 9.34997 14.4805 8.84997 14.5805 8.14997L15.0805 4.94997C15.2805 4.04997 14.6805 3.04997 13.7805 2.74997C12.9805 2.44997 11.9805 2.84997 11.5805 3.44997L7.48047 9.54997"
                      className="stroke-[#263238] dark:stroke-[#ECEFF1]"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M2.37988 18.3499V8.5499C2.37988 7.1499 2.97988 6.6499 4.37988 6.6499H5.37988C6.77988 6.6499 7.37988 7.1499 7.37988 8.5499V18.3499C7.37988 19.7499 6.77988 20.2499 5.37988 20.2499H4.37988C2.97988 20.2499 2.37988 19.7499 2.37988 18.3499Z"
                      className="stroke-[#263238] dark:stroke-[#ECEFF1]"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="sm:mr-[6px] mr-1 text-[#263238] dark:text-gray-400">
                  22
                </p>
              </div>

              <div className="items-center flex sm:w-[83px] w-[63px] h-[48px] bg-[#ECEFF1]  rounded-[50px] dark:bg-[#37474F] ">
                <span className="sm:mr-4 mr-2 sm:w-[24px] sm:h-[24px] w-5 h-5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5197 5.6499L13.4197 3.2499C13.0197 2.8499 12.1197 2.6499 11.5197 2.6499H7.71973C6.51973 2.6499 5.21973 3.5499 4.91973 4.7499L2.51973 12.0499C2.01973 13.4499 2.91973 14.6499 4.41973 14.6499H8.41973C9.01973 14.6499 9.51973 15.1499 9.41973 15.8499L8.91973 19.0499C8.71973 19.9499 9.31973 20.9499 10.2197 21.2499C11.0197 21.5499 12.0197 21.1499 12.4197 20.5499L16.5197 14.4499"
                      className="stroke-[#263238] dark:stroke-[#ECEFF1]"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M21.6201 5.65V15.45C21.6201 16.85 21.0201 17.35 19.6201 17.35H18.6201C17.2201 17.35 16.6201 16.85 16.6201 15.45V5.65C16.6201 4.25 17.2201 3.75 18.6201 3.75H19.6201C21.0201 3.75 21.6201 4.25 21.6201 5.65Z"
                      className="stroke-[#263238] dark:stroke-[#ECEFF1]"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="sm:mr-[6px] mr-1 text-[#263238] dark:text-gray-400">
                  22
                </p>
              </div>
            </div> */}

            <div className="flex items-center gap-3">
              <button className="flex items-center 0">
                <span className="ml-1 text-xs">{currentLikeCount}</span>
                <FaThumbsUp
                  className={`text-xl  ${
                    currentUserIsLike
                      ? "dark:text-green-600 text-green-400"
                      : "dark:text-white text-white"
                  }`}
                  onClick={handleLike}
                />
              </button>
              <button className="flex items-center ">
                <FaThumbsDown
                  className={`text-xl  ${
                    currentUserIsDissLike
                      ? "text-red-400 dark:text-red-600"
                      : " text-white dark:text-white"
                  }`}
                  onClick={handleDissLike}
                />
                <span className="mr-1 text-xs">{currentDissLikeCount}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MidDetails };

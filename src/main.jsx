import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app/App";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/storage/store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000, // مدت زمانی که داده‌ها قبل از نیاز به بازخوانی تازگی دارند (به میلی‌ثانیه)
      cacheTime: 300000, // مدت زمانی که داده‌ها قبل از حذف از کش باقی می‌مانند
      refetchOnWindowFocus: true, // آیا داده‌ها باید دوباره بارگذاری شوند وقتی پنجره دوباره در مرکز توجه قرار می‌گیرد
    },
  },
});

createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer />
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={App} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  </>
);

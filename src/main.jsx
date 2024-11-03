import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app/App";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

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

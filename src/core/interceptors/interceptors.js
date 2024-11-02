import axios from "axios";
import { getItem, removeItem } from "../services/storage/storage.services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const baseURL = import.meta.env.VITE_BASE_URL;

const http = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  console.log("interceptor", response);
  if (response.data.success != undefined && !response.data.success) {
    console.log("toast error");
    toast(response.data.message);
  } else if (response.data.success != undefined && response.data.success) {
    console.log("toast info");
    toast(response.data.message);
  }
  return response.data;
};

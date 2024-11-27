import { useMutation, useQuery } from "@tanstack/react-query";
import http from "../../../interceptors/interceptors";
import { ApiRoutes } from "../ApiRoutes/ApiRoutes";

const PayMentStepOne = async (user) => {
  console.log("this is PayMentStepOne", user);
  try {
    const response = await http.post(
      ApiRoutes.PANEL_ADD_COURSE_PAYMENT_STEP_ONE_URL,
      user
    );
    console.log(response.message, "this response PayMentStepOne");
    return response;
  } catch (error) {
    return false;
  }
};

export const usePayMentStepOne = () => {
  return useMutation({
    mutationKey: ["PayMentStepOne"],
    mutationFn: (data) => {
      console.log("this is user PayMentStepOne data =", data);
      return PayMentStepOne(data);
    },
  });
};

//step two

const PayMentStepTwo = async (user) => {
  console.log("this is PayMentStepTwo", user);
  try {
    const response = await http.post(
      ApiRoutes.PANEL_ADD_COURSE_PAYMENT_STEP_TWO_URL,
      user
    );
    console.log(response.message, "this response PayMentStepTwo");
    return response;
  } catch (error) {
    return false;
  }
};

export const usePayMentStepTwo = () => {
  return useMutation({
    mutationKey: ["PayMentStepTwo"],
    mutationFn: (data) => {
      console.log("this is user PayMentStepTwo data =", data);
      return PayMentStepTwo(data);
    },
  });
};

import { validateData } from "@/utils/helpers";
import { apiClient } from "./apiClient";

export async function fetchModels(token_type, token, params = {}) {
  try {    
    const response = await apiClient.get(
      `/api/api-keys?&page=${params?.page}&size=${params?.size}`,
      {
        headers: {
          Authorization: `${token_type} ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log("error =>", error);

    return error;
  }
}
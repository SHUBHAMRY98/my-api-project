import { validateData } from "@/utils/helpers";
import { apiClient } from "./apiClient";

// /api/projects/{project_id}/categories

export async function fetchCategories(token_type, token, params = {}) {
  try {
    const response = await apiClient.get(
      `/api/categories?&page=${params?.page}&size=${params?.size}`,
      {
        headers: {
          Authorization: `${token_type} ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    let text = error?.response?.data?.detail;
    if (!validateData(text)) {
      text = error?.response?.data || errmsg;
    }

    const msginfo = {
      error: true,
      text,
      // stack: error.stack || null,
    };

    return { success: false, message: text, msginfo, items:[] };
  }
}

export async function fetchCategoriesBySite(token_type, token, params = {}) {  
  try {
    const response = await apiClient.get(
      `/api/categories?site_id=${params?.site_id}&page=${params?.page}&size=${params?.size}`,
      {
        headers: {
          Authorization: `${token_type} ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    let text = error?.response?.data?.detail;
    if (!validateData(text)) {
      text = error?.response?.data || errmsg;
    }

    const msginfo = {
      error: true,
      text,
      // stack: error.stack || null,
    };

    return { success: false, message: text, msginfo, items:[] };
  }
}

export async function addCategory(token_type, token, formdata) {
  try {
    const response = await apiClient.post("/api/categories/", formdata, {
      headers: {
        Authorization: `${token_type} ${token}`,
      },
    });
    return { success: true, data: response?.data || {} };
  } catch (error) {
    let errmsg = "Unable to process please try latter.";
    return { success: false, message: error || errmsg };
  }
}

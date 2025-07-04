import { validateData } from "@/utils/helpers";
import { apiClient } from "./apiClient";

export async function fetchProjects(token_type, token, params = {}) {
  try {
    const response = await apiClient.get(
      `/api/projects/${validateData(params?.query) ? "search" : ""}?${
        validateData(params?.query) ? `&k=${params?.query}` : ``
      }&page=${params?.page}&size=${params?.size}`,
      {
        headers: {
          Authorization: `${token_type} ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    let errmsg = "Unable to process please try latter.";
    let text = error?.response?.data?.detail;
    if (!validateData(text)) {
      text = error?.response?.data || errmsg;
    }

    const msginfo = {
      error: true,
      text,
    };

    return { success: false, message: text, msginfo };
  }
}

export async function addProject(token_type, token, formdata) {
  try {
    const response = await apiClient.post("/api/projects", formdata, {
      headers: {
        Authorization: `${token_type} ${token}`,
      },
    });
    return {
      success: true,
      data: response?.data || {},
      message: "Project added successfully.",
    };
  } catch (error) {
    let errmsg = "Unable to process please try latter.";
    let text = error?.response?.data?.detail;
    if (!validateData(text)) {
      text = error?.response?.data || errmsg;
    }

    const msginfo = {
      error: true,
      text,
    };

    return { success: false, message: text, msginfo };
  }
}

export async function updateProject(token_type, token, recordid, formdata) {
  try {
    const response = await apiClient.patch(
      `/api/projects/${recordid}`,
      formdata,
      {
        headers: {
          accept: "application/json",
          Authorization: `${token_type} ${token}`,
        },
      }
    );
    return {
      success: true,
      data: response?.data || {},
      message: "Project updated successfully.",
    };
  } catch (error) {
    let errmsg = "Unable to process please try latter.";
    let text = error?.response?.data?.detail;
    if (!validateData(text)) {
      text = error?.response?.data || errmsg;
    }

    const msginfo = {
      error: true,
      text,
    };

    return { success: false, data: { id: recordid }, message: text, msginfo };
  }
}

export async function deleteProject(token_type, token, recordid) {
  try {
    const response = await apiClient.delete(`/api/projects/${recordid}`, {
      headers: {
        accept: "application/json",
        Authorization: `${token_type} ${token}`,
      },
    });
    return {
      success: true,
      data: { id: recordid },
      recordid,
      message: "Project deleted successfully.",
    };
  } catch (error) {
    let errmsg = "Unable to process please try latter.";
    let text = error?.response?.data?.detail;
    if (!validateData(text)) {
      text = error?.response?.data || errmsg;
    }

    const msginfo = {
      error: true,
      text,
    };

    return { success: false, message: text, msginfo };
  }
}

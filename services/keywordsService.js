import { downloadCSV, validateData } from "@/utils/helpers";
import { apiClient } from "./apiClient";

export async function fetchKeywords(token_type, token, params = {}) {
  try {
    const response = await apiClient.get(
      `/api/keywords/${validateData(params?.query) ? "search" : ""}?${
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
    console.log("error =>", error);

    return error;
  }
}

export async function fetchKeywordsByProjects(token_type, token, params = {}) {
  try {
    const response = await apiClient.get(
      `/api/projects/${params?.project_id}/keywords`,
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

export async function addKeyword(token_type, token, formdata) {
  try {
    const response = await apiClient.post("/api/keywords", formdata, {
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

export async function updateKeyword(token_type, token, recordid, formdata) {
  try {
    const response = await apiClient.patch(
      `/api/keywords/${recordid}`,
      formdata,
      {
        headers: {
          accept: "application/json",
          Authorization: `${token_type} ${token}`,
        },
      }
    );
    return { success: true, data: response?.data || {} };
  } catch (error) {
    let errmsg = "Unable to process please try latter.";
    return { success: false, message: errmsg || error };
  }
}

export async function deleteKeyword(token_type, token, recordid) {
  try {
    const response = await apiClient.delete(`/api/keywords/${recordid}`, {
      headers: {
        accept: "application/json",
        Authorization: `${token_type} ${token}`,
      },
    });

    return { success: true, recordid: recordid };
  } catch (error) {
    let errmsg = "Unable to process please try latter.";
    return { success: false, message: errmsg || error };
  }
}

export async function bulkAddKeyword(token_type, token, formdata) {
  try {
    const response = await apiClient.post("/api/keywords/bulk", formdata, {
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

export async function bulkExportKeyword(token_type, token) {
  try {
    const response = await apiClient.get(`/api/keywords/export`, {
      headers: {
        Authorization: `${token_type} ${token}`,
      },
    });
    downloadCSV(response.data);
  } catch (error) {
    let errmsg = "Unable to process please try latter.";
    return { success: false, message: error || errmsg };
  }
}

export async function deleteBulkKeyword(token_type, token, recordids) {
  try {
    const response = await apiClient.delete(`/api/keywords/bulk`, {
      headers: {
        accept: "application/json",
        Authorization: `${token_type} ${token}`,
      },
      data: { ids: recordids },
    });

    return { success: true, recordids: recordids };
  } catch (error) {
    let errmsg = "Unable to process please try latter.";
    return { success: false, message: errmsg || error };
  }
}

export async function bulkAssignKeywordsToProject(
  token_type,
  token,
  project_id,
  recordids
) {
  try {
    const response = await apiClient.post(
      `/api/projects/${project_id}/keywords`,
      recordids,
      {
        headers: {
          accept: "application/json",
          Authorization: `${token_type} ${token}`,
        },
      }
    );

    return { success: true, data: response?.data || {} };
  } catch (error) {
    let errmsg = "Unable to process please try latter.";
    return { success: false, message: errmsg || error };
  }
}

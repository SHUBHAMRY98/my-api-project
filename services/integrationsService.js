import { validateData } from "@/utils/helpers";
import { apiClient } from "./apiClient";

export async function fetchWebsiteRecords(token_type, token, params = {}) {
  try {
    const response = await apiClient.get(
      `/api/sites/?is_active=true&page=${params?.page}&size=${params?.size}`,
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

export async function updateWebsiteRecord(
  token_type,
  token,
  recordid,
  formdata
) {
  try {
    const response = await apiClient.patch(`/api/sites/${recordid}`, formdata, {
      headers: {
        accept: "application/json",
        Authorization: `${token_type} ${token}`,
      },
    });
    return { success: true, websiteId: recordid, data: response?.data || {} };
  } catch (error) {
    let errmsg = "Unable to process please try latter.";
    return { success: false, message: errmsg || error };
  }
}

export async function deleteWebsiteRecord(token_type, token, recordid) {
  try {
    const response = await apiClient.delete(`/api/sites/${recordid}`, {
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

export async function checkConnection(token_type, token, recordid, formdata) {
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

export async function addWebsiteRecord(token_type, token, formdata) {
  try {
    const response = await apiClient.post("/api/sites", formdata, {
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

export async function addWebsiteAuthorsRecord(
  token_type,
  token,
  siteid,
  formdata
) {
  try {
    const response = await apiClient.post(
      `/api/sites/${siteid}/authors`,
      formdata,
      {
        headers: {
          Authorization: `${token_type} ${token}`,
        },
      }
    );
    return { success: true, websiteId: siteid, data: response?.data || {} };
  } catch (error) {
    let errmsg = "Unable to process please try latter.";
    return { success: false, message: error?.response?.data?.detail || errmsg };
  }
}

export async function updateWebsiteAuthorsRecord(
  token_type,
  token,
  siteid,
  recordid,
  formdata
) {
  try {
    const response = await apiClient.patch(
      `/api/sites/${siteid}/authors`,
      formdata,
      {
        headers: {
          Authorization: `${token_type} ${token}`,
        },
      }
    );
    return {
      success: true,
      websiteId: siteid,
      authorId: recordid,
      data: response?.data || {},
    };
  } catch (error) {
    let errmsg = "Unable to process please try latter.";
    return { success: false, message: error?.response?.data?.detail || errmsg };
  }
}

export async function deleteWebsiteAuthorsRecord(
  token_type,
  token,
  siteid,
  recordid
) {
  try {
    const response = await apiClient.delete(
      `/api/sites/${siteid}/authors/${recordid}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `${token_type} ${token}`,
        },
      }
    );

    return { success: true, recordid: recordid };
  } catch (error) {
    let errmsg = "Unable to process please try latter.";
    return { success: false, message: errmsg || error };
  }
}
